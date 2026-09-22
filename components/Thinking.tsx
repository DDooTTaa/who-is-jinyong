import {
  Bot,
  Briefcase,
  Building2,
  CircleDot,
  Compass,
  Lightbulb,
  Scale,
} from 'lucide-react'

const intro = [
  '안녕하세요, 굳이 문제를 찾는 지원자 공진용입니다. 총 경력 5년차이고, 메뉴잇이라는 테이블오더 서비스에서 2년 반째 프론트엔드로 일하고 있습니다. 다만 저는 제 직무 범위 밖의 문제까지 늘 찾아다녔습니다. 본사 미팅에 직접 들어가 가맹법을 검토하고, 해외 사업을 할 때 미국 문화에만 있는 팁 기능을 어떻게 살릴지 고민하고, 신규 기능을 발의해 특허까지 받았습니다. 최근에는 AI의 발전에 맞춰 안드로이드, 파이썬 백엔드, AWS 인프라까지 영역을 넓혀, AI 고객 응대 시스템과 저희 도메인 데이터를 기반으로 답변하는 RAG 파이프라인을 개발했습니다.',
  '저는 문제를 찾는 과정 자체를 즐기는 사람입니다. 화장실 소변기에 붙은 광고를 보면서도 ‘이 꼼짝 못하는 상황을 태블릿을 이용해 광고 지면으로 활용하면 되게 유용하겠다’ 생각하고, 웹에서는 잘 안 쓰는 CSS 빛 효과로 시선을 끄는 트리거를 만들어보기도 합니다.',
  '이런 제 모습이 아정당이 원하는 인재상과 맞다고 생각해 지원하게 됐습니다. 아정당에서도 어느 팀의 프로세스를 직접 경험하며 불편을 찾고, 때로는 여러 고객 페르소나가 되어 아정당의 약점을 찾아내며 기여하고 싶습니다.',
]

const sections = [
  {
    id: 'career',
    number: '1',
    icon: Briefcase,
    label: 'Scope',
    title: '경력/직무 확장 관련',
    questions: [
      {
        id: 'q1',
        number: 'Q1',
        title: '프론트엔드로 입사했는데, 왜 백엔드나 인프라까지 영역을 넓히게 됐나요?',
        paragraphs: [
          '원래부터 관심은 있었는데 회사 규모의 변화가 있어서 제가 그 역할까지 맡게 되었습니다.',
        ],
      },
      {
        id: 'q2',
        number: 'Q2',
        title: '안드로이드 프론트까지 하신다고 했는데, 왜 모바일까지 확장하셨나요?',
        paragraphs: [
          '원래부터 관심은 있었는데 회사 규모의 변화가 있어서 제가 그 역할까지 맡게 되었습니다.',
        ],
      },
    ],
  },
  {
    id: 'franchise',
    number: '2',
    icon: Scale,
    label: 'Franchise',
    title: '가맹법/본사 미팅 관련',
    questions: [
      {
        id: 'q3',
        number: 'Q3',
        title: '개발자인데 왜 본사 미팅에 직접 들어가셨나요? 보통 기획자나 영업이 하는 일 아닌가요?',
        paragraphs: [
          '맞습니다. 그 당시 회사에서는 기획자라는 직군이 따로 없었기 때문에 제가 그 역할까지 맡게 되었습니다.',
        ],
      },
      {
        id: 'q4',
        number: 'Q4',
        title: '가맹법의 어떤 부분이 문제였고, 어떻게 해결하셨나요?',
        paragraphs: [
          '가맹사업법상 본사가 가맹점에 특정 상품을 강매할 수 없고, 가맹점은 자체적으로 메뉴를 추가할 수 있는 권리가 있습니다. 그런데 이 두 조건을 그대로 시스템에 반영하면, 본사 입장에서는 브랜드 통일성을 관리하기 어려워지는 문제가 있었습니다.',
          '그래서 저는 법적 권리는 그대로 지키되, 가맹점이 메뉴를 추가하면 본사에 알림이 가도록 하고, 본사가 내린 메뉴는 본사만 수정·삭제할 수 있도록 권한을 분리해서 설계했습니다. 가맹점은 품절과 숨김으로 메뉴를 숨길 수 있어서 자율성은 침해하지 않으면서도, 본사가 상황을 파악하고 관리할 수 있는 구조를 만든 겁니다.',
          '여기서 더 나아가, 단순히 규정을 지키는 데서 그치지 않고 본사가 가맹점과의 관계를 더 유연하게 운영할 수 있는 방법도 역으로 제안했습니다. 가맹점별로 협조도를 포인트화해서, 본사 정책을 잘 따르는 가맹점에는 재료를 좀 더 저렴하게 공급하는 식의 인센티브 구조를 제안했습니다.',
          '이 제안은 내부 논의 단계에서 보류됐지만, 우리 회사에 대한 긍정적이고 자발적인 인상을 줄 수 있었던 것 같습니다.',
        ],
      },
    ],
  },
  {
    id: 'patent',
    number: '3',
    icon: Lightbulb,
    label: 'Patent',
    title: '특허/신규 기능 발의 관련',
    questions: [
      {
        id: 'q5',
        number: 'Q5',
        title: '어떤 특허를 받으셨나요? 아이디어는 어떻게 나왔나요?',
        paragraphs: [
          '가맹점에서 선결제, 즉 고객이 미리 금액을 충전해두고 나중에 차감해서 쓰는 방식을 운영할 때, 많은 매장이 여전히 수기 장부로 이 금액을 관리하고 있다는 걸 발견했습니다. 이렇게 되면 금액이 누락되거나, 매장과 고객 간에 분쟁이 생길 수도 있을 것 같았습니다.',
          '그래서 이 선결제 금액을 디지털 장부처럼 시스템상에서 기록하고, 사용할 때마다 자동으로 차감·관리할 수 있는 방법과 장치, 이를 구현하는 프로그램에 대해 특허를 출원했고 등록까지 받았습니다.',
        ],
      },
      {
        id: 'q6',
        number: 'Q6',
        title: '그 기능이 실제로 어떤 성과를 냈나요?',
        paragraphs: [
          '실제로 제품에 구현되어 서비스 되지는 않았습니다. 저희 회사는 VOC에 의존해 기능을 구현하는 게 일반적이어서요.',
          '다만 이 특허가 의미 있다고 생각하는 이유는, 제가 담당 업무 범위 밖에서 발생하는 실무 불편을 스스로 발견하고, 그걸 구체적인 기술적 해결책으로까지 설계해서 지적재산권으로 완성시켰다는 과정 자체에 있습니다. 법무법인을 끼고 하긴 했지만, 아이디어를 떠올리는 데서 그치지 않고 끝까지 형식을 갖춰 완결시키는 태도를 보여준 사례라고 생각합니다.',
        ],
      },
    ],
  },
  {
    id: 'ai',
    number: '4',
    icon: Bot,
    label: 'AI',
    title: 'AI 프로젝트 관련',
    questions: [
      {
        id: 'q7',
        number: 'Q7',
        title: 'AI 고객 응대 시스템, 어떻게 만드셨나요?',
        paragraphs: [
          'Bedrock과 Lambda를 이용해 만들었습니다. 저희 자체 매뉴얼인 깃북을 지식베이스로 우선 탐색하고, 없으면 과거 CS 데이터를 탐색해 답변하도록 설계했습니다. 또 EventBridge 스케줄러로 10분 간격으로 고객 응답 여부를 체크해서, 답이 없으면 재확인 로직을 추가했습니다.',
        ],
      },
      {
        id: 'q8',
        number: 'Q8',
        title:
          '“저희 도메인 데이터를 기반으로 답변하는 RAG 파이프라인을 개발”이라고 하셨는데, 이게 무슨 의미인가요?',
        paragraphs: [
          '고객이 “이번 주 매출 알려줘”처럼 자연어로 질문하면, Bedrock이 이 요청의 의도를 직접 판단해서 매출 조회가 필요하다고 인식하고, Lambda의 해당 데이터 조회 함수를 트리거합니다. 이렇게 가져온 실제 데이터를 Bedrock이 다시 받아 응답을 생성하고, 그 결과를 Chart.js로 자체 웹/앱 화면에 차트로 렌더링해서 보여주는 구조입니다.',
          '단순히 매뉴얼 기반으로 텍스트 답변만 하는 게 아니라, 고객의 의도를 판단해서 실제 데이터와 연결하고 시각적으로 보여주는 것까지 구현한 게 핵심입니다.',
        ],
      },
      {
        id: 'q9',
        number: 'Q9',
        title: '이 시스템의 정확도나 한계는 어떻게 관리하셨나요? 잘못된 답변을 하면 어떻게 되나요?',
        paragraphs: [
          '잘못된 답변을 할 것 같을 때, 환각이 크다고 본인이 판단하면 다시 한 번 고객에게 물어보는 로직을 추가했습니다. 물론 개선이 필요한 점이 많았지만, 아직 라이브에 반영되지 않은 실험 단계여서 더 작업한 사항은 없습니다.',
        ],
      },
    ],
  },
  {
    id: 'style',
    number: '5',
    icon: Compass,
    label: 'Style',
    title: '성향/문제해결 스타일 관련',
    questions: [
      {
        id: 'q10',
        number: 'Q10',
        title: '이런 성향이 원래부터 있으셨나요, 아니면 일하면서 생긴 건가요?',
        paragraphs: [
          '원래도 있었던 것 같습니다. 대학교 임베디드 수업에서 청각장애인을 위한 웨어러블을 만들었을 때도, 단순히 옷만 전시하면 효과가 떨어질 것 같아서 패션과에서 마네킹을 빌려와 아이언맨 슈트처럼 전시했던 적이 있습니다. 결과물 자체보다, 그게 어떻게 전달되는지까지 신경 쓰는 게 저한테는 자연스러운 것 같습니다.',
        ],
      },
      {
        id: 'q11',
        number: 'Q11',
        title: '그렇게 본인 일이 아닌 영역까지 파고들다 보면 동료나 다른 팀과 마찰이 생기지는 않나요?',
        paragraphs: [
          '네, 맞습니다. 실제로 마찰이 있었던 적이 여러 번 있습니다. 돌이켜보면 그건 제가 회사의 방식과 완전히 핏을 맞추지 못한 제 몫의 문제이기도 했다고 생각합니다.',
          '그래도 그 상황을 그냥 두지는 않았습니다. 함께 자라기 같은 책에서 이야기하는 애자일한 방식, 그리고 서로 조금 더 투명하게 일하는 방식이 필요하다고 여러 번 이야기했고, 제가 먼저 회의록을 공유하거나 크로스체크하는 과정을 만들어보기도 했습니다.',
          '다만 솔직히 말씀드리면, 이런 시도가 조직 전체의 문화를 크게 바꿀 만큼의 효과를 내지는 못했습니다. 이 경험을 통해 제가 배운 건, 좋은 방식을 제안하는 것만으로는 부족하고, 그 방식이 조직에 자리 잡으려면 결국 그걸 받아들일 준비가 된 환경과 타이밍이 함께 맞아야 한다는 것이었습니다. 그래서 지금은 제가 옳다고 믿는 방식을 일방적으로 밀어붙이기보다, 먼저 작은 성공 사례를 만들어서 보여주고, 동료가 필요성을 스스로 느낄 수 있게 하는 방향으로 접근을 바꾸고 있습니다.',
        ],
      },
    ],
  },
  {
    id: 'motive',
    number: '6',
    icon: Building2,
    label: 'Motive',
    title: '지원동기/회사 이해 관련',
    questions: [
      {
        id: 'q13',
        number: 'Q13',
        title: '아정당에 대해 어느 정도 알고 지원하셨나요? 구체적으로 어떤 인재상이 본인과 맞다고 생각하셨나요?',
        paragraphs: [
          '원래는 이름만 알고 있었고 요구 사항과 인재상이 저랑 맞는 것 같다고 생각해서 지원을 했는데, 서종훈 실장님이 올리신 AI Builder 채용 관련 글을 읽고 지원하길 잘했다는 생각을 했습니다. 그 글에서 인상 깊었던 건, AI Builder는 AI를 잘 쓰는 개발자도, 기술을 연구하는 사람도 아니라, 고객의 불편을 사업 기회로 해석하고 AI로 빠르게 만든 뒤 실제 지표와 결과까지 책임지는 사람이라는 정의였습니다.',
          '저는 프론트엔드로 입사했지만, 실제로는 본사 미팅에 들어가 가맹법을 검토하고, 신규 기능을 발의해 특허까지 받고, 필요하면 백엔드와 인프라까지 직접 건드리며 일해왔습니다. 그 과정에서 제가 중요하게 생각한 건 언제나 “이 기능이 구현됐다”가 아니라 “이게 실제로 가맹점과 본사의 문제를 해결했는가”였습니다. 최근에 만든 AI 고객 응대 시스템도, 단순히 Bedrock을 붙이는 데서 그치지 않고 고객이 자연어로 매출을 물으면 실제 데이터를 조회해 시각화까지 해주는 방식으로, 결과에 닿을 때까지 끝까지 만든 사례입니다.',
          '글에서 언급하신 “어디까지 직접 하고 언제 전문가의 검토를 요청해야 하는지 판단하는 것도 Builder의 역량”이라는 부분도 공감했습니다. 저 역시 제가 다룰 수 있는 범위를 넓혀왔지만, 동시에 법적 제약이 있는 영역은 본사와 직접 협의하고, 기술적 판단이 필요한 지점은 팀과 조율하는 방식으로 일해왔습니다. 이 정의가 제가 지금까지 추구하는 일 방식과 가장 가깝다고 느껴서 지원하게 됐습니다.',
          '그리고 추가로, 아정당이라는 이름을 발음할 때마다 자연스럽게 웃게 되는 것도 마음에 들었습니다.',
        ],
      },
      {
        id: 'q14',
        number: 'Q14',
        title: '메뉴잇에서 2년 반이나 일하셨는데, 왜 이직을 결심하셨나요?',
        paragraphs: [
          '메뉴잇에서 2년 반 동안 다양한 문제를 스스로 찾아 해결하며 성장했지만, 최근엔 조직의 의사결정 구조가 고객 VOC에만 의존하고, 먼저 발전 방향을 제시하기보다 들어오는 요청에 대응하는 데 그치는 경우가 많다고 느꼈습니다. AI로 인해 업무 속도가 빨라지면서 오히려 이런 소통과 의사결정의 공백이 더 크게 느껴졌고, 조직 개편 과정에서 맥락과 히스토리가 제대로 공유되지 않다 보니, 최근에는 제가 마치 외주 업체처럼 단발성 요청만 처리하는 방식으로 일하게 됐습니다.',
          '저는 문제를 스스로 찾아 해결하는 걸 즐기는 사람이라, 그저 요청받은 걸 처리하는 역할보다는 문제 정의 단계부터 함께 참여하고 주도적으로 기여할 수 있는 환경에서 일하고 싶다는 확신이 들었습니다. 그래서 이직을 결심하게 됐습니다.',
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
          <h2 className="mb-6 border-b border-border pb-2 text-[24px] font-semibold">생각</h2>

          <div className="mb-8 space-y-3">
            {intro.map((paragraph) => (
              <p key={paragraph} className="text-[16px] leading-7 text-fg">
                {paragraph}
              </p>
            ))}
          </div>

          <nav aria-label="문항 목차" className="mb-8 rounded-gh border border-border bg-canvas-subtle p-4">
            <ol className="space-y-1.5 text-sm">
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="text-accent hover:underline">
                    {section.number}) {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-12">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-16">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-canvas-subtle px-2 font-mono text-xs font-semibold text-fg-muted">
                    {section.number}
                  </span>
                  <section.icon size={16} className="text-fg-muted" />
                  <span className="gh-topic">{section.label}</span>
                </div>
                <h3 className="mb-6 text-[20px] font-semibold">{section.title}</h3>

                <div className="space-y-8">
                  {section.questions.map((question) => (
                    <div key={question.id} id={question.id} className="scroll-mt-16">
                      <h4 className="mb-3 text-sm font-semibold leading-6 text-fg">
                        {question.number}. {question.title}
                      </h4>
                      <div className="space-y-3 border-l-2 border-accent pl-3">
                        {question.paragraphs.map((paragraph) => (
                          <p key={paragraph} className="text-sm leading-6 text-fg-muted">
                            {paragraph}
                          </p>
                        ))}
                      </div>
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
