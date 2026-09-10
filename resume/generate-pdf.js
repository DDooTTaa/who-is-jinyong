const fs = require('fs')
const path = require('path')
const { spawnSync } = require('child_process')

const root = path.resolve(__dirname, '..')
const resumeDir = __dirname
const template = fs.readFileSync(path.join(resumeDir, 'index.html'), 'utf8')
const chrome = path.join(process.env.LOCALAPPDATA, 'Google', 'Chrome', 'Application', 'chrome.exe')
const profile = path.join(process.env.TEMP, 'chrome-resume-profile')

const variants = [
  { role: 'AI First Product Engineer', file: '공진용_이력서_Product_Engineer.pdf' },
  { role: 'AI First Front Engineer', file: '공진용_이력서_Front_Engineer.pdf' },
]

fs.mkdirSync(profile, { recursive: true })

for (const variant of variants) {
  const htmlPath = path.join(resumeDir, `${variant.file.replace('.pdf', '')}.html`)
  const pdfPath = path.join(resumeDir, variant.file)
  const rootPdf = path.join(root, variant.file)
  fs.writeFileSync(htmlPath, template.replaceAll('{{ROLE}}', variant.role), 'utf8')

  const result = spawnSync(
    chrome,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-first-run',
      `--user-data-dir=${profile}`,
      '--no-pdf-header-footer',
      '--virtual-time-budget=20000',
      `--print-to-pdf=${pdfPath}`,
      pathToFileURL(htmlPath),
    ],
    { encoding: 'utf8' }
  )

  if (result.status !== 0 && !fs.existsSync(pdfPath)) {
    console.error(result.stderr || result.stdout)
    process.exit(result.status || 1)
  }

  fs.copyFileSync(pdfPath, rootPdf)
  console.log('wrote', variant.file)
}

function pathToFileURL(filePath) {
  return 'file:///' + filePath.replace(/\\/g, '/')
}
