# Who is Jinyong? | 공진용 포트폴리오


## ✨ 특징

- 🌟 **디자인**: 보라색과 파란색 그라데이션을 활용한 미스터리한 분위기
- 🎭 **인터랙티브 애니메이션**: Framer Motion을 통한 부드러운 애니메이션 효과
- 📱 **반응형 디자인**: 모든 디바이스에서 최적화된 사용자 경험
- ⚡ **최신 기술 스택**: Next.js 14, TypeScript, Tailwind CSS
- 🎨 **글래스모피즘**: 현대적인 UI 디자인 트렌드 적용

## 🚀 기술 스택

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Custom CSS
- **Animation**: Framer Motion
- **Icons**: React Icons, Heroicons
- **Deployment**: Vercel

## 📦 설치 및 실행

### 1. 저장소 클론
\`\`\`bash
git clone https://github.com/your-username/who-is-jinyong.git
cd who-is-jinyong
\`\`\`

### 2. 의존성 설치
\`\`\`bash
npm install
\`\`\`

### 3. 개발 서버 실행
\`\`\`bash
npm run dev
\`\`\`

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

## 🎨 디자인 시스템

### 색상 팔레트
- **Mystic Blue**: `#0ea5e9` - 신묘한 파란색!!
- **Cosmic Purple**: `#a855f7` - 우주적 보라색!
- **Background**: 다크 그라데이션 배경

### 애니메이션
- **Float**: 부드러운 떠다니는 효과
- **Glow**: 네온 글로우 효과
- **Shimmer**: 반짝이는 효과
- **Twinkle**: 반짝반짝 효과

## 📁 프로젝트 구조

\`\`\`
who-is-jinyong/
├── app/                    # Next.js App Router
│   ├── globals.css        # 전역 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 메인 페이지
├── components/            # React 컴포넌트
│   ├── BackgroundEffects.tsx
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── public/               # 정적 파일
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vercel.json          # Vercel 배포 설정
\`\`\`

## 🚀 Vercel 배포

### 방법 1: GitHub 연동 (권장)

1. **Vercel에 로그인**
   - [vercel.com](https://vercel.com)에 접속하여 GitHub 계정으로 로그인

2. **프로젝트 Import**
   - "Add New Project" 클릭
   - GitHub 저장소 선택
   - Vercel이 자동으로 Next.js 프로젝트를 감지

3. **자동 배포**
   - GitHub에 push할 때마다 자동으로 배포됩니다
   - Production, Preview, Development 브랜치별로 자동 배포

### 방법 2: Vercel CLI

1. **Vercel CLI 설치**
   \`\`\`bash
   npm i -g vercel
   \`\`\`

2. **배포**
   \`\`\`bash
   vercel
   \`\`\`

3. **프로덕션 배포**
   \`\`\`bash
   vercel --prod
   \`\`\`

### 배포 전 확인사항

- ✅ `package.json`에 빌드 스크립트가 있는지 확인
- ✅ `next.config.js` 설정 확인
- ✅ `public` 폴더의 이미지 파일 확인
- ✅ **환경 변수 설정 (필수)**: Vercel 대시보드에서 EmailJS 환경 변수 설정

### 환경 변수 설정

#### EmailJS 연동

배포 후에도 이메일 전송 기능이 작동하려면 Vercel에 환경 변수를 설정해야 합니다:

1. **Vercel 대시보드 접속**
   - [vercel.com](https://vercel.com) → 프로젝트 선택 → Settings → Environment Variables

2. **다음 환경 변수 추가**
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

3. **각 환경에 적용**
   - Production, Preview, Development 모두에 체크

4. **재배포**
   - 환경 변수 추가 후 자동으로 재배포되거나, 수동으로 Redeploy 실행

**참고**: EmailJS는 클라이언트 사이드에서 동작하므로 서버 없이도 이메일 전송이 가능합니다.

#### Google Tag Manager (GTM) 연동

방문자 추적을 위해 GTM을 설정할 수 있습니다:

1. **로컬 개발 환경 설정**
   - 프로젝트 루트에 `.env.local` 파일 생성
   - 다음 환경 변수 추가:
   ```
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```
   - GTM ID는 [Google Tag Manager](https://tagmanager.google.com/)에서 확인 가능

2. **Vercel 배포 환경 설정**
   - Vercel 대시보드 → Settings → Environment Variables
   - `NEXT_PUBLIC_GTM_ID` 환경 변수 추가
   - Production, Preview, Development 모두에 체크
   - 재배포 실행

3. **GTM에서 확인**
   - GTM 대시보드에서 실시간 방문자 추적 확인 가능
   - 태그 설정을 통해 다양한 이벤트 추적 가능

#### Google Analytics 4 (GA4) 연동

방문자 분석을 위해 GA4를 설정할 수 있습니다:

1. **로컬 개발 환경 설정**
   - 프로젝트 루트에 `.env.local` 파일 생성 또는 수정
   - 다음 환경 변수 추가:
   ```
   NEXT_PUBLIC_GA_ID=G-RH7SPHKMF5
   ```
   - 기본값으로 `G-RH7SPHKMF5`가 설정되어 있어 환경 변수가 없어도 동작합니다
   - GA 측정 ID는 [Google Analytics](https://analytics.google.com/)에서 확인 가능

2. **Vercel 배포 환경 설정**
   - Vercel 대시보드 → Settings → Environment Variables
   - `NEXT_PUBLIC_GA_ID` 환경 변수 추가 (선택사항)
   - Production, Preview, Development 모두에 체크
   - 재배포 실행

3. **GA4에서 확인**
   - Google Analytics 대시보드에서 실시간 방문자 확인 가능
   - 페이지뷰, 이벤트 등 다양한 분석 데이터 확인 가능

### 배포 후

- 자동으로 HTTPS 적용
- 글로벌 CDN으로 빠른 로딩 속도
- 자동 스케일링

## 🎯 주요 섹션

1. **Hero**: 메인 소개 섹션
2. **About**: 개인 소개 및 가치관
3. **Skills**: 기술 스택 및 숙련도
4. **Projects**: 주요 프로젝트 소개
5. **Contact**: 연락처 및 소셜 미디어

## 🔧 커스터마이징

### 색상 변경
\`tailwind.config.js\`에서 색상 팔레트를 수정할 수 있습니다.

### 애니메이션 조정
\`app/globals.css\`에서 애니메이션 키프레임을 수정할 수 있습니다.

### 콘텐츠 수정
각 컴포넌트 파일에서 개인 정보를 수정할 수 있습니다.

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📞 연락처

- **이메일**: wlswls8783@gmail.com
- **GitHub**: [@jinyong](https://github.com/jinyong)
- **LinkedIn**: [공진용](https://linkedin.com/in/jinyong)

---

⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요!