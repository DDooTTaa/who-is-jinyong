import {
  Bot,
  CircleDot,
  FlaskConical,
  Lightbulb,
  Target,
  Trash2,
} from 'lucide-react'

const questions = [
  {
    id: 'q1',
    number: '1',
    icon: Trash2,
    label: 'Kill',
    title: '만든 것을 미련 없이 버린 경험',
    prompt:
      '본인이 만든 것을 미련 없이 버린 경험이 있다면, 무엇을 근거로 버리기로 판단했는지 알려주세요. 실패했거나 접은 프로젝트도 좋습니다.',
    verdict: '제가 만든 것이라도, 회사가 다른 길을 고르면 붙잡지 않으려고 합니다.',
    body: [
      {
        heading: '자체 제작 고객센터',
        paragraphs: [
          '회사는 CS팀을 없애기로 했습니다. 실제 들어오는 문의를 유형별로 나눠 보고, 자주 묻는 질문부터 룰 기반으로 응대하는 고객센터를 만들었습니다. 데이터를 안에 두고 보안과 운영을 맞출 수 있으면 회사에 도움이 될 거라고 생각해, 자체 제작을 쓰자고 여러 번 이야기했습니다.',
          '결국 회사는 다른 SaaS를 계약했습니다. 당시에는 이유를 충분히 듣지 못해 아쉬웠습니다. 다만 이미 쓰기로 한 도구가 있는데 제가 만든 화면을 고집하는 건, 팀을 더 힘들게 하는 일이라고 봤습니다. 고객센터는 제가 지키고 싶은 산출물이 아니라, 문의가 잘 흘러가게 하는 수단이어야 했습니다. 그래서 미련을 두지 않고 접었습니다.',
        ],
      },
    ],
  },
  {
    id: 'q3',
    number: '3',
    icon: Lightbulb,
    label: 'Initiative',
    title: '시키지 않았는데 스스로 정의해서 만든 것',
    prompt:
      '아무도 시키지 않았는데 스스로 정의해서 만든 것이 있다면 소개해 주세요. 그 문제를 왜 문제라고 판단했는지 함께 적어 주세요.',
    verdict: '문제는 기능이 부족한 게 아니라, 같은 실패가 반복되는 구조에 있습니다.',
    body: [
      {
        heading: '비즈블라 — 프랜차이즈 점주 익명 커뮤니티',
        paragraphs: [
          '메뉴잇에서 5,000개 이상 매장을 보다 보니, 점주들이 같은 운영 문제를 매장마다 따로 겪고 있었습니다. 본사 공식 채널에서는 말하기 어렵고, 단톡방은 휘발되며, 나중에 찾지도 못합니다.',
          '문제로 본 이유는 “커뮤니티가 없어서”가 아닙니다. 솔직하게 말해도 불이익이 없는 장소가 없어서 같은 실패가 반복된다는 점이었습니다. 익명성은 장난을 허용하는 장치가 아니라, 본사와 가맹의 관계 안에서 정보를 교환하는 최소 조건입니다. 그래서 시켜주기 전에 기획·디자인·프론트·백엔드·배포를 한 흐름으로 만들고, 3일 안에 핵심 기능을 올렸습니다.',
        ],
        link: { href: 'https://bizblah.com/', label: 'bizblah.com' },
      },
      {
        heading: '회사 안에서 먼저 정의한 것들',
        paragraphs: [
          '패스트뷰 CMS에서는 백엔드 언어마다 API 응답이 달라, 연동할 때마다 변환 로직을 고치고 있었습니다. 문제는 프론트 생산성이 아니라 팀이 같은 데이터를 다른 말로 말하고 있다는 점이었습니다. 시키지 않았는데 응답 포맷 표준화 문서를 먼저 제안하고 백엔드와 맞춰 갔습니다.',
          '광고 관리에서는 기획이 비어 있는 드래그 앤 드롭 UI를 직접 정의하는 기획 QA 프로세스를 만들었습니다. 채널톡 자체 AI와 고객센터 도와드림도 같은 결입니다. CS 인원이 50% 줄면, 남은 사람이 반복 문의에 매이는 구조가 병목입니다. 사람이 기억으로 분류하던 흐름을 문제로 보고, 자동 분류와 응대 파이프라인을 정의했습니다.',
        ],
      },
    ],
  },
  {
    id: 'q4',
    number: '4',
    icon: FlaskConical,
    label: 'Validation',
    title: '가설을 가장 싸게 검증한 경험',
    prompt:
      '가설을 세우고 가장 싸게 검증했던 경험을 알려주세요. 여러 검증 방법을 놓고 비교했다면 무엇을 왜 골랐는지, 만들지 않고 확인한 경험이 있다면 그것도 좋습니다.',
    verdict: '검증 질문이 “만들 수 있는가”가 아니면, 길게 만들지 않습니다.',
    body: [
      {
        heading: '대표님 아이디어는 스프린트 전에 프로토타입으로',
        paragraphs: [
          '가설은 대개 이것입니다. 우리가 만들고 싶은가, 점주나 운영이 당장 쓰는가. 비교한 방법은 세 가지였습니다. 기획서를 쓰고 정식 개발에 들어가면 틀림을 늦게 알고, 이미 일정과 체면이 묶입니다. 디자인 시안만으로는 눌러보는 공백과 예외 케이스가 안 보입니다. AI로 동작하는 프로토타입을 하루 이틀 안에 만들면 실제 클릭과 반응을 볼 수 있습니다.',
          '세 번째를 고른 이유는 질문이 구현 난이도가 아니었기 때문입니다. 필요한지를 보는 자리에 완성된 서비스를 가져가면, 이미 버린 선택을 방어하게 됩니다.',
        ],
      },
      {
        heading: '만들지 않고 확인한 경우',
        paragraphs: [
          '도와드림을 그리기 전에, 실제 고객센터 문의가 어떤 유형으로 반복되는지 먼저 분류했습니다. 자동화 범위는 화면이 아니라 반복되는 문의 덩어리로 정해졌습니다.',
          '랜딩 페이지는 새 사이트를 다시 만들기 전에 Hotjar로 기존 페이지에서 사람들이 어디서 멈추는지 봤습니다. 가설이 “랜딩이 구리다”가 아니라 “이 구간에서 이탈한다”로 좁혀지면 A/B 범위가 작아집니다.',
          '운송장 조회는 전 택배사 연동을 한 번에 붙이지 않았습니다. 번호 패턴만으로 후보를 좁힐 수 있는지부터 확인한 뒤, 자리수가 겹치는 지점에서만 병렬 조회를 붙였습니다. 비즈블라도 리서치 문서로 몇 주를 쓰지 않았습니다. 익명으로 글을 쓰고 읽을 수 있는지 3일짜리 서비스로 올려 보는 쪽이 더 쌌습니다.',
        ],
      },
    ],
  },
  {
    id: 'q5',
    number: '5',
    icon: Target,
    label: 'Metrics',
    title: '성공을 무엇으로 판정할지 지표를 설계한 경험',
    prompt:
      '기능을 만들 때 성공을 무엇으로 판정할지 지표를 함께 설계해 본 경험이 있나요? 그 수치를 본인이 직접 확인했는지, 결과가 나빴던 경우도 함께 적어 주세요.',
    verdict: '지표는 나중에 붙이는 장식이 아니라, 기능을 버릴 수 있게 만드는 장치입니다.',
    body: [
      {
        heading: '랜딩 페이지 — 전환, 그리고 원복',
        paragraphs: [
          '성공 정의는 방문이 아니라 문의·신청 전환이었습니다. Amplitude, GTM, Hotjar, Meta Pixel로 이벤트와 퍼널, 히트맵을 제가 심고 직접 봤습니다. 카피나 배치를 바꾼 변형이 전환을 올리지 못하거나 되레 떨어지는 경우가 있었습니다. 예쁜 쪽이 이기지 않으면 원복했습니다. A/B는 제가 만든 화면을 지키는 장치가 아니라, 버리기 위한 장치였습니다.',
        ],
      },
      {
        heading: '도와드림 / 채널톡 AI — 자동화율만 보면 실패한다',
        paragraphs: [
          '성공 정의는 CS 인원 50% 감축 이후에도 문의가 적체되지 않는 것, 반복 문의가 사람 손을 덜 타는 것이었습니다. 문의 유형별 분류가 실제로 붙는지, 운영자가 목록에서 바로 처리할 수 있는지 화면과 케이스를 같이 확인했습니다.',
          '초기에 예외 문의가 한 유형으로 뭉쳐 자동 분류가 빗나갔습니다. 분류됐다는 숫자가 올라가도 운영자가 다시 열어보면 실패한 겁니다. 유형을 더 잘게 쪼개고, 애매한 건 사람 큐로 남기는 쪽이 맞았습니다.',
        ],
      },
      {
        heading: '지표를 보기도 전에 접힌 경우',
        paragraphs: [
          '패스트뷰 CMS와 광고 관리에서는 운영팀 업무 효율 50% 이상을 목표로 잡았고, 수작업이 어드민 흐름으로 바뀌었는지 운영 쪽 체감과 작업 시간으로 확인했습니다. 반대로 직원 관리 서비스는 지표를 볼 기회 없이 전제였던 미국 사업이 사라져 접었습니다. 기능을 만든 뒤의 실패가 아니라, 성공 지표가 의존하던 사업이 먼저 죽은 경우입니다. 그 이후로는 지표를 설계할 때 이 숫자가 어떤 사업 전제 위에 있는지를 같이 적습니다.',
        ],
      },
    ],
  },
  {
    id: 'q6',
    number: '6',
    icon: Bot,
    label: 'Leverage',
    title: 'AI를 레버리지로 쓰는 방식과 검증 기준',
    prompt:
      'AI를 도구가 아니라 레버리지로 써서 본인의 작업 방식 자체를 바꿔본 경험과, AI가 만든 결과물을 검증하는 본인만의 기준을 알려주세요.',
    verdict: 'AI는 속도를 만들고, 기준은 제가 가집니다.',
    body: [
      {
        heading: '역할이 오기를 기다리지 않는 루프',
        paragraphs: [
          '도구로 쓸 때는 코드 자동완성에 가깝습니다. 레버리지로 쓰기 시작한 건 작업 순서 자체를 바꿨을 때입니다. 기획 문서, 디자인, 프론트를 차례로 기다리지 않고 기획·디자인·프론트·백엔드·트래킹을 한 사이클에 둡니다. 업무일지로 맥락을 남겨 같은 설명을 반복하지 않고, 대표님 아이디어는 회의로 키우지 않고 동작하는 화면으로 다음날 가져갑니다.',
          '모르는 스택도 실무에 바로 넣었습니다. Flutter 워치 앱, 이폼사인 팝업 연동, AWS EventBridge·Lambda·Bedrock으로 만든 채널톡 AI가 그 경우입니다. 비즈블라는 이 루프로 3일 만에 올렸고, 로테이프도 기획부터 인증·저장·공유까지 같은 방식으로 닫았습니다.',
        ],
      },
      {
        heading: '검증하지 않으면 레버리지가 아니라 사고입니다',
        paragraphs: [
          '컴파일이 아니라 상태 전이를 봅니다. 결제 성공·실패·취소, 채널톡 웹훅, 팝업 postMessage처럼 실제 운영 경로를 제가 눌러봅니다. AI가 만든 해피패스는 믿지 않습니다.',
          '공식 문서와 스펙을 대조합니다. 이폼사인은 예시가 부족해 AI가 없는 파라미터를 지어냈습니다. 문서, 실제 응답, 브라우저 통신을 같이 보기 전에는 머지하지 않습니다.',
          '보안, SEO, 데이터 수집, 권한처럼 운영 요구사항이 비어 있으면 화면이 나와도 미완성입니다. 설명하지 못하는 코드는 올리지 않습니다. 특히 인증·결제·개인정보입니다. 지표를 설계했다면 GTM이나 Amplitude에 그 이름 그대로 찍히는지까지가 구현입니다.',
          '속도만 올리면 잘못된 기능이 더 빨리 쌓입니다. 그래서 버리기 기준과 성공 지표를 먼저 적고, 그다음에 AI에게 일을 맡깁니다.',
        ],
      },
    ],
  },
] as const

const Thinking = () => {
  return (
    <section id="thinking" className="mb-6">
      <article className="gh-card overflow-hidden">
        <div className="flex items-center justify-between border-b border-border bg-canvas-subtle px-4 py-2">
          <div className="flex items-center gap-2 text-sm font-semibold text-fg">
            <CircleDot size={16} className="text-fg-muted" />
            <span className="font-mono text-[13px]">jinyong / thinking.md</span>
          </div>
        </div>

        <div className="px-4 py-6 sm:px-8">
          <h2 className="mb-6 border-b border-border pb-2 text-[24px] font-semibold">
          생각
          </h2>

          <nav aria-label="문항 목차" className="mb-8 rounded-gh border border-border bg-canvas-subtle p-4">
            <ol className="space-y-1.5 text-sm">
              {questions.map((question) => (
                <li key={question.id}>
                  <a href={`#${question.id}`} className="text-accent hover:underline">
                    {question.number}) {question.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-10">
            {questions.map((question) => (
              <section key={question.id} id={question.id} className="scroll-mt-16">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-canvas-subtle px-2 font-mono text-xs font-semibold text-fg-muted">
                    {question.number}
                  </span>
                  <question.icon size={16} className="text-fg-muted" />
                  <span className="gh-topic">{question.label}</span>
                </div>
                <h3 className="mb-2 text-[20px] font-semibold">{question.title}</h3>
                <p className="mb-4 text-sm leading-6 text-fg-muted">{question.prompt}</p>
                <p className="mb-5 border-l-2 border-accent pl-3 text-[16px] font-semibold leading-7 text-fg">
                  {question.verdict}
                </p>

                <div className="space-y-5">
                  {question.body.map((block) => (
                    <div key={block.heading}>
                      <h4 className="mb-2 text-sm font-semibold text-fg">{block.heading}</h4>
                      {block.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="mb-3 text-sm leading-6 text-fg-muted last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                      {'link' in block && block.link && (
                        <a
                          href={block.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-block text-sm text-accent hover:underline"
                        >
                          {block.link.label}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>
    </section>
  )
}

export default Thinking
