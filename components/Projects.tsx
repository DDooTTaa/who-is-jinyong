'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Book, Building2, ChevronDown, ChevronRight, ExternalLink, Lock } from 'lucide-react'

const companyGroups = [
  {
    company: '메뉴잇',
    period: '2024.04 ~ 재직중',
    description: '5000개 이상 매장에서 사용하는 다목적 관리 & 운영 서비스. 채널톡·AWS·백엔드 기반 자체 AI 솔루션까지 단독 개발',
    language: 'TypeScript',
    languageColor: '#3178c6',
    projects: [
      {
        title: '채널톡 자체 AI 솔루션',
        summary: '테이블 오더 메뉴잇 - 채널톡 기반 고객 응대를 위한 자체 AI 솔루션을 단독 개발. AWS EventBridge Scheduler, Lambda, Bedrock을 활용해 스케줄링·서버리스 처리·LLM 응답까지 end-to-end로 구현.',
        technologies: ['Channel Talk', 'AWS EventBridge Scheduler', 'AWS Lambda', 'Amazon Bedrock', 'TypeScript'],
        category: 'AI Solution',
        role: '단독 개발 (기획 ~ 인프라·연동)',
        challenges: '채널톡 문의 흐름에 맞춰 자동 응대하려면 웹훅·스케줄·LLM 호출을 한 파이프라인으로 묶어야 했고, 운영 중에도 안정적으로 돌아가도록 서버리스 구조로 설계해야 했습니다.',
        solutions: 'EventBridge Scheduler로 주기/예약 작업을 잡고, Lambda에서 채널톡 연동과 비즈니스 로직을 처리하며, Bedrock으로 응답을 생성해 자체 AI 응대 솔루션을 단독으로 구축',
        learnings: '프론트뿐 아니라 AWS 서버리스와 LLM을 직접 조합하면, 외부 SaaS 위에서도 회사에 맞는 AI 운영 도구를 빠르게 만들 수 있다는 확신을 얻었습니다.',
      },
      {
        title: '페이플(Payple) 결제 연동',
        summary: '테이블 오더 메뉴잇 - 페이플 결제 연동을 위한 전 과정에 참여한 프로젝트. 심사 요청부터 프론트·백엔드·DB 설계·구현까지 담당.',
        technologies: ['React', 'TypeScript', 'Payple', 'Backend', 'DB'],
        category: 'Payment Integration',
        role: '결제 연동 전 과정 (심사 요청 ~ 백엔드·DB)',
        challenges: '결제 연동은 프론트 UI뿐 아니라 심사·약관·콜백·정산·DB 스키마까지 한 흐름으로 맞춰야 했습니다. 심사 요청 단계부터 요구사항을 정리하고, 결제 성공·실패·취소 등 상태 전이를 백엔드와 DB에 일관되게 반영하는 것이 핵심 과제였습니다.',
        solutions: '페이플 심사 요청 및 연동 스펙 정리, 결제·콜백 플로우 설계, 프론트 결제 UI/연동 구현, 백엔드 API 및 DB 스키마·상태 관리까지 end-to-end로 구현',
        learnings: '결제 도메인은 화면 구현보다 심사·보안·상태 관리·정합성이 중요하다는 점, 프론트부터 DB까지 전체 흐름을 이해해야 안정적인 결제 연동이 가능하다는 점.',
      },
      {
        title: 'B2B 대응 화이트 라벨링',
        summary: '테이블 오더 메뉴잇 - 기업별 요구사항에 맞춰 커스터마이징 가능한 화이트 라벨링 프론트엔드 구조 구축 프로젝트.',
        technologies: ['React', 'React-saga', 'TypeScript', 'Zira'],
        category: 'B2B Service',
        role: '프론트엔드 개발',
        challenges: '서비스 규모는 크지 않았지만, 다양한 기업별 디자인·브랜딩 요소를 유연하게 대응해야 했습니다. 이를 위해 인풋, 버튼, 체크박스 등 공통 UI 컴포넌트의 일관성과 커스터마이징 범위를 조율하는 과정이 까다로웠습니다. 또한 각 브랜드별 색상·로고·문구 등의 차이를 빌드 분기 없이 반영할 수 있는 구조 설계가 필요했습니다.',
        solutions: '공통 UI 컴포넌트 시스템화 (Design System 기반), 테마 및 스타일 토큰(theme token)을 활용한 브랜드별 자동 대응 구조',
        learnings: '화이트 라벨링 구조 설계의 중요성과 유지보수를 고려한 컴포넌트 설계 방식, UI 일관성을 유지하면서도 커스터마이징이 가능한 시스템 아키텍처 설계 경험.',
      },
      {
        title: 'SK 비회원 이커머스 서비스',
        summary: '테이블 오더 메뉴잇 - 점주가 가게 운영에 필요한 부자재를 손쉽게 구매할 수 있도록 설계된 타깃형 이커머스 서비스.',
        technologies: ['React', 'React-saga', 'TypeScript', 'Zira'],
        category: 'E-Commerce',
        role: '기획 / 디자인 / 프론트엔드 개발',
        challenges: '기존 회원 중심 구조의 몰을 비회원 사용자도 이용할 수 있도록 재설계해야 했습니다. 이를 위해 인증 절차 최소화, 장바구니·결제 흐름의 접근성 개선, 기존 백엔드 API와의 호환성 유지가 주요 과제였습니다.',
        solutions: '비회원 주문 프로세스를 위한 별도 세션 관리 로직 구현, API 호출 시 회원/비회원 플로우 자동 분기 처리, 비회원 사용자에게 필요한 최소 정보 입력 UX 설계',
        learnings: '사용자 유형별 유연한 서비스 설계 방법, 기존 시스템 제약 내에서 새로운 비즈니스 요구사항을 반영하는 방법, 프론트엔드와 백엔드 간 데이터 흐름 최적화의 중요성.',
      },
      {
        title: 'SK쉴더스 이관 서비스',
        summary: '이폼사인(eformsign) API 연동 기반 서비스 이관 - 이폼사인 API를 연동하여 이관 동의 절차를 처리하는 팝업 및 서비스 화면 개발 프로젝트.',
        technologies: ['React', 'TypeScript'],
        category: 'Service Integration',
        role: '디자인 / 프론트엔드 개발',
        challenges: '이폼사인 API의 공식 예시나 문서가 부족해 구현 과정에서 시행착오가 많았으며, 짧은 일정 내 빠른 서비스 반영이 요구되었습니다.',
        solutions: 'AI 도구를 활용해 API 연동 및 팝업 통신 구조를 빠르게 구현, window.opener.postMessage()를 활용한 팝업-부모 창 간 통신 구조 설계, 인증 및 승인 로직을 단일 책임 컴포넌트로 분리',
        learnings: 'AI 기반 개발 환경의 생산성 향상 체감, React에서 외부 API 제어 및 브라우저 간 통신(postMessage)의 이해 심화.',
      },
      {
        title: '고객센터 도와드림',
        summary: '고객센터 관리 도구 - 사용자 문의를 효율적으로 관리하고 응대 자동화를 지원하는 고객센터 관리 서비스.',
        technologies: ['React', 'TypeScript'],
        category: 'Admin Service',
        role: '기획 / 디자인 / 프론트엔드 개발',
        challenges: '다양한 케이스의 고객센터 프로세스를 로직화하는 과정에서 복잡성이 높았고, 실시간 데이터 반영과 UI 응답성 간 균형이 필요했습니다.',
        solutions: '문의 유형별 자동 분류 로직 기획 및 구현, 관리자용 문의 목록 및 상세 화면 디자인 및 개발',
        learnings: '현업 프로세스 분석의 중요성과 운영자 중심 UX 설계 경험, 상태 관리 및 성능 최적화 패턴의 실무 적용.',
      },
      {
        title: '메뉴 관리 & 카테고리 관리 서비스 개편',
        summary: '테이블 오더 메뉴잇 - 매장 점주를 위한 메뉴 및 카테고리 관리 기능의 웹 서비스 리뉴얼 프로젝트.',
        technologies: ['React', 'React-saga', 'TypeScript', 'Zira'],
        category: 'Service Improvement',
        role: '디자인 / 프론트엔드 개발',
        challenges: '모바일(Android) 중심 UX를 웹에 맞게 재구성해야 했고, 기존 사용자의 익숙한 흐름과 새로운 웹 인터랙션 간의 균형이 어려웠습니다.',
        solutions: '반응형 레이아웃과 컴포넌트 재사용성 설계, 웹 전용 인터랙션(hover, drag, modal depth 등) 적극 반영, 점주 사용 패턴 기반의 간결한 편집·관리 UX 설계',
        learnings: '플랫폼 특성에 맞춘 UX 차별화 설계의 중요성, 모바일과 웹의 경험을 통합적으로 고려하는 디자인 감각.',
      },
      {
        title: '메뉴잇 랜딩 페이지 퍼블리싱',
        summary: '테이블 오더 메뉴잇 - 메뉴잇 브랜드 및 서비스 홍보를 위한 공식 랜딩 페이지 구축.',
        technologies: ['React', 'TypeScript', 'Zira', 'HTML', 'CSS', 'JavaScript', 'Django', 'Figma', 'Amplitude', 'GTM', 'Hotjar', 'Meta Pixel'],
        category: 'Landing Page',
        role: '프론트엔드(퍼블리싱) / A/B 테스트 / 데이터 트래킹',
        challenges: '전문 기획자 없이 마케터와 직접 협업해야 했고, 실시간 QA·배포 요청이 잦아 비효율이 발생했습니다.',
        solutions: 'QA·배포 프로세스 자동화, A/B 테스트 환경 및 버전 관리 전략 수립, Amplitude, GTM, Hotjar 연동으로 트래킹 자동화',
        learnings: '빠른 기획–개발–배포 사이클 대응력 향상, 데이터 기반 마케팅 로직의 구조적 이해 및 실무 적용.',
      },
      {
        title: 'Menuit-Watch (Flutter App)',
        summary: '테이블 오더 메뉴잇 - 스마트워치로 주문 알림을 받아 매장 운영 효율을 높일 수 있는 앱.',
        technologies: ['Flutter'],
        category: 'Mobile App',
        role: '디자인 / 프론트엔드(Flutter) 개발',
        challenges: 'Flutter·Firebase 기초만 알고 시작해 학습 곡선이 높았고, 실시간 주문 알림 구조를 설계해야 했습니다.',
        solutions: '공식 문서 및 AI를 통한 빠른 학습, Firebase Cloud Messaging(FCM)으로 푸시 알림 구현, MVVM 패턴 기반 화면·상태 관리 구조화',
        learnings: 'AI 활용 학습의 효율성, 새로운 스택을 빠르게 실무에 적용하는 능력 향상, 크로스플랫폼 구조 이해.',
      },
      {
        title: '메뉴잇몰(부자재 몰) 개편',
        summary: '테이블 오더 메뉴잇 - 점주가 운영에 필요한 부자재를 구매할 수 있는 이커머스 리뉴얼 프로젝트.',
        technologies: ['React', 'React-thunk', 'TypeScript', 'Zira'],
        category: 'E-Commerce',
        role: '프론트엔드 개발',
        challenges: '이전 코드베이스는 구조 일관성이 부족했고, 주석 및 문서 부재로 전체 흐름을 파악하기 어려웠습니다.',
        solutions: '의존 관계 및 로직 시각화, 불필요한 로직 정리 및 기능 단위 리팩토링, Hook 패턴 표준화, 상태 최소화, 폴더 구조 재정비',
        learnings: '읽기 어려운 코드는 유지보수 불가능한 코드임을 실감, 레거시 리팩토링을 통한 설계 감각 향상 및 팀 내 코드 품질 문화의 중요성 인식.',
      },
      {
        title: '서비스 글로벌라이즈(i18n)',
        summary: '테이블 오더 메뉴잇 - 서비스 전체 페이지를 다국어화한 프로젝트.',
        technologies: ['React', 'React-saga', 'TypeScript', 'Zira'],
        category: 'Globalization',
        role: '프론트엔드 개발',
        challenges: '페이지별 수작업 번역으로 비효율이 컸고, 자동화 설계가 초기 단계에서 반영되지 못했습니다.',
        solutions: 'i18n 라이브러리 도입, 번역 파일 구조 및 키 네임스페이스 설계, 우선순위 페이지부터 순차 적용',
        learnings: '자동화 설계의 중요성 체감, 글로벌 확장을 위한 기술·운영적 국제화 전략의 필요성.',
      },
      {
        title: '옵션 그룹 관리',
        summary: '테이블 오더 메뉴잇 - 상품 옵션을 유연하게 설정·관리할 수 있는 관리자 기능 모듈.',
        technologies: ['React', 'TypeScript'],
        category: 'Admin Service',
        role: '기획 / 디자인 / 프론트엔드 개발',
        challenges: '데이터 구조 복잡성과 UX 모델 간 불일치 문제.',
        solutions: '옵션 그룹 생성·수정·삭제 기능 및 옵션 조합 로직 설계',
        learnings: '데이터 중심 설계(Data-driven Design)의 필요성과 유지보수를 고려한 상태 관리 패턴의 중요성.',
      },
      {
        title: '직원 관리 서비스 (글로벌라이즈)',
        summary: '테이블 오더 메뉴잇 - 직원 근무 시간과 팁 정산을 관리하기 위한 매장 운영 서비스.',
        technologies: ['React', 'React-saga', 'TypeScript', 'Zira'],
        category: 'Admin Service',
        role: '기획 / 디자인 / 프론트엔드 개발',
        challenges: '미국의 팁 문화에 맞춘 정산 시스템을 설계했으나, 경영 환경 변화로 인해 개발이 중단되었습니다.',
        solutions: '문화적 요소를 반영한 서비스 기획',
        learnings: '문화적 요소를 반영한 서비스 기획의 중요성, 글로벌 확장을 위한 문화적 이해와 설계 감각, 비록 완성되지 않아도 기획 과정에서 얻은 통찰의 가치 인식.',
      },
    ],
  },
  {
    company: '패스트뷰',
    period: '2022.05 ~ 2023.03',
    description: '350개 이상의 파트너사의 콘텐츠에 대한 광고, 트래픽 분석을 제공하는 솔루션',
    language: 'TypeScript',
    languageColor: '#3178c6',
    projects: [
      {
        title: 'ViewUs (CMS)',
        summary: 'Fastview - ViewUs (CMS) - 350개 이상의 콘텐츠 기업이 미디어 상품을 등록·유통하고, 파트너사에 홍보 및 광고 트래픽 데이터를 제공하는 콘텐츠 유통 관리 솔루션',
        technologies: ['React', 'React-thunk', 'TypeScript', 'Zira'],
        category: 'CMS',
        role: '프론트엔드 개발',
        challenges: '초기에는 스켈레톤 코드만 존재한 상태에서 단독 투입되어 개발을 시작했습니다. 2명의 시니어와 2명의 주니어 백엔드 개발자가 제공한 API 구조가 언어별로 일관되지 않아, 데이터 연동 시마다 변환 로직을 수정해야 하는 비효율이 발생했습니다. 이를 해결하기 위해 API 응답 포맷 표준화 문서를 제안·정리하고, 백엔드 팀과 협의하여 일관된 구조를 갖춘 API 규격을 수립했습니다.',
        solutions: 'API 표준화 가이드라인 수립 및 백엔드 팀과의 협업으로 구조 통합, 서비스 전반의 데이터 플로우를 파악해 효율적인 API 호출 구조 재설계, Git-flow 전략을 적용하여 이후 합류한 팀원이 바로 작업에 참여할 수 있도록 개발 환경 정비, 에러 핸들링 및 로딩 상태 관리 구조화로 CMS 안정성 강화',
        learnings: '혼자 개발하더라도 협업 가능한 구조(Git-flow, 코드 컨벤션)를 유지하는 것이 이후 프로젝트 확장성과 온보딩 효율에 결정적이라는 점을 깨달음, 백엔드 스키마 구조에 대한 이해가 프론트 개발 효율과 직결됨을 실감, 명확한 기획 커뮤니케이션의 중요성 — 문서만으로 작업할 때 발생하는 리소스 낭비를 경험, 콘텐츠 및 광고 유통 도메인에 대한 실무 지식을 습득',
      },
      {
        title: 'ViewUs (광고 관리 서비스)',
        summary: 'Fastview - ViewUs (광고 관리 서비스) - 콘텐츠 내 삽입되는 광고의 종류·빈도·카테고리를 자동으로 제어할 수 있는 광고 관리 시스템',
        technologies: ['React', 'React-thunk', 'TypeScript', 'Zira'],
        category: 'Admin Service',
        role: '프론트엔드 개발 / ITWizard(몽골) 원격 개발팀 리더',
        challenges: '프로젝트 진행 중 몽골 현지 개발팀의 리더 역할을 맡게 되면서 언어 및 문화적 차이로 인한 커뮤니케이션의 어려움을 겪었습니다. 특히 Git 사용 경험이 적은 팀원들과의 협업 과정에서 코드 충돌 및 일정 지연이 발생했지만, Git-flow 전략을 교육하고 일일 업무 보고 체계를 도입하여 점차 협업 구조를 안정화했습니다. 또한 광고 삽입 로직은 단순히 노출 제어 수준이 아니라 콘텐츠 카테고리·빈도·타입별 자동화 로직이 필요했기 때문에, 기획 단계에서 세부 정의가 부족한 상태로 전달되는 경우가 많았습니다. 이 문제를 해결하기 위해 기획서의 불명확한 부분을 사전에 검토하고 직접 정의 보완하는 프로세스를 만들었습니다. (기획 QA)',
        solutions: 'Git-flow 기반 협업 프로세스 및 코드 리뷰 문화 정착, 일일 보고 시스템 도입으로 업무 진행 투명성 확보, 드래그 앤 드롭 기반 UI의 기획 누락 부분을 자체적으로 정의 및 설계, 광고 자동화 로직의 카테고리별 매핑 구조화',
        learnings: '대화와 합의 없는 협업은 반드시 문제를 남긴다는 것을 경험적으로 배움, 리모트 팀 운영에서 명확한 프로세스와 책임 구분의 중요성을 체득, 기획 단계의 불명확한 정의를 빠르게 식별하고 피드백하는 능력이 전체 개발 효율을 결정짓는다는 것을 깨달음',
      },
      {
        title: '셀러밀 (이커머스 솔루션)',
        summary: 'Fastview - 셀러밀 (이커머스 솔루션) - 쇼핑몰 구축부터 상품 소싱, 물류 배송, CS까지 기업의 이커머스 전반을 지원하는 통합 솔루션',
        technologies: ['React', 'React-thunk', 'TypeScript', 'Zira'],
        category: 'B2B Service',
        role: '프론트엔드 개발',
        challenges: '프로젝트는 리액트를 기반으로 한 사내 커스터마이징 프레임워크 위에서 진행되었습니다. 일반적인 React 구조와 다르게 동작하는 내부 프레임워크라, 처음에는 개발 흐름을 파악하고 커스텀 컴포넌트 구조에 익숙해지는 데 어려움이 있었습니다. 특히 새로운 디자인이나 기능을 구현할 때, 공통 소스 전체를 수정해야 하는 구조적 제약이 존재해 작은 수정이 전체 서비스에 영향을 미칠 수 있었습니다. 이 문제를 해결하기 위해 컴포넌트 단위의 영향 범위 분석을 진행하고, 기존 구조를 유지하면서도 확장 가능한 형태로 UI를 재구성했습니다.',
        solutions: '공통 UI 컴포넌트의 의존 관계 정리 및 영향도 분석, 확장성 있는 구조로 컴포넌트 리팩토링 및 분리, Blob 데이터를 활용한 이미지 데이터 핸들링 로직 구현, 데이터 중심 렌더링 구조로 프론트엔드와 백엔드 간 데이터 싱크 효율 개선',
        learnings: 'Blob 데이터 처리 및 이미지 업로드/미리보기 로직 구현 경험, 데이터 중심 개발 패턴(data-driven architecture)에 대한 이해 향상',
      },
    ],
  },
  {
    company: '트럼피아',
    period: '2021.11 ~ 2022.04',
    description: '미국의 SMS, 이메일, 메시지 자동 관리 & 운영 B2B 솔루션 서비스',
    language: 'Vue',
    languageColor: '#42b883',
    projects: [
      {
        title: 'Trumpia',
        summary: 'Trumpia - 해외 시장을 대상으로 SMS, 이메일, 메시지 자동 관리 및 운영을 지원하는 B2B 솔루션',
        technologies: ['Vue', 'VueX', 'Redmine'],
        category: 'B2B Service',
        role: '프론트엔드 개발',
        challenges: '초기 코드베이스는 스파게티 코드 상태였고, 반년간 유지보수를 담당하며 개발보다는 조직 내 협업, 커뮤니케이션 문제, 작업 우선순위 관리 등 사회적/조직적 문제에도 많은 신경을 써야 했습니다. 또한 해외 서비스 특성상 다양한 도메인 로직과 메시징 규칙을 이해하는 데 어려움이 있었습니다.',
        solutions: '기존 코드 구조 분석 후 리팩토링 가능한 최소 단위별 개선 진행, 코드 리뷰와 문서화를 통해 협업 기준과 코드 품질 향상, 서비스 도메인(해외 메시징 규칙, 자동화 로직)을 학습하고, 이를 바탕으로 프론트엔드 로직 구현',
        learnings: '양질의 코드와 협업의 중요성을 코드 리뷰 과정을 통해 체득, 어려운 도메인 이해 능력 향상 — 복잡한 해외 메시징 시스템 구조 파악 경험, 레거시 시스템에서 유지보수하며 문제 해결력과 구조 개선 감각을 키움',
      },
    ],
  },
]

const Projects = () => {
  const [expandedCompany, setExpandedCompany] = useState<string | null>(null)
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  return (
    <section id="projects" className="mb-6">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-normal text-fg">
          Careers <span className="text-fg-muted">· 경력과 프로젝트</span>
        </h2>
      </div>

      <div className="space-y-3">
        {companyGroups.map((group) => {
          const isExpanded = expandedCompany === group.company

          return (
            <div key={group.company} className="gh-card overflow-hidden">
              <button
                type="button"
                onClick={() => setExpandedCompany(isExpanded ? null : group.company)}
                className="flex w-full items-start gap-3 p-4 text-left hover:bg-canvas-subtle"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-gh border border-border bg-canvas-subtle">
                  <Building2 size={18} className="text-fg-muted" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <Lock size={12} className="text-fg-muted" />
                    <h3 className="text-sm font-semibold text-accent">{group.company}</h3>
                    <span className="rounded-full border border-border px-2 text-[12px] text-fg-muted">Private</span>
                  </div>
                  <p className="mt-1 text-xs text-fg-muted">{group.description}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-fg-muted">
                    <span className="inline-flex items-center gap-1">
                      <span className="h-3 w-3 rounded-full" style={{ background: group.languageColor }} />
                      {group.language}
                    </span>
                    <span>{group.period}</span>
                    <span>{group.projects.length} repositories</span>
                  </div>
                </div>
                <ChevronDown
                  size={16}
                  className={`mt-1 shrink-0 text-fg-muted transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-2 border-t border-border p-3">
                      {group.projects.map((project) => {
                        const projectKey = `${group.company}-${project.title}`
                        const isProjectExpanded = expandedProject === projectKey
                        const hasDetails = Boolean(project.challenges || project.solutions || project.learnings)

                        return (
                          <div key={project.title} className="rounded-gh border border-border">
                            {hasDetails ? (
                              <button
                                type="button"
                                onClick={() => setExpandedProject(isProjectExpanded ? null : projectKey)}
                                className="flex w-full items-start gap-2 p-3 text-left hover:bg-canvas-subtle"
                              >
                                <div className="min-w-0 flex-1">
                                  <div className="mb-1 flex flex-wrap items-center gap-2">
                                    <Book size={14} className="text-fg-muted" />
                                    <h4 className="text-sm font-semibold text-accent">{project.title}</h4>
                                    <span className="gh-topic">{project.category}</span>
                                    {project.role && (
                                      <span className="rounded-full border border-border px-2 text-[11px] text-fg-muted">
                                        {project.role}
                                      </span>
                                    )}
                                  </div>
                                  <p className="mb-2 text-xs leading-5 text-fg-muted">{project.summary}</p>
                                  <div className="flex flex-wrap gap-1.5">
                                    {project.technologies.map((tech) => (
                                      <span key={tech} className="gh-topic">
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                                <ChevronRight
                                  size={16}
                                  className={`mt-0.5 shrink-0 text-fg-muted transition-transform ${isProjectExpanded ? 'rotate-90' : ''}`}
                                />
                              </button>
                            ) : (
                              <div className="p-3">
                                <div className="mb-1 flex flex-wrap items-center gap-2">
                                  <Book size={14} className="text-fg-muted" />
                                  <h4 className="text-sm font-semibold text-accent">{project.title}</h4>
                                  <span className="gh-topic">{project.category}</span>
                                </div>
                                <p className="mb-2 text-xs leading-5 text-fg-muted">{project.summary}</p>
                                <div className="mb-2 flex flex-wrap gap-1.5">
                                  {project.technologies.map((tech) => (
                                    <span key={tech} className="gh-topic">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                                {project.live && project.live !== '#' && (
                                  <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-xs text-accent hover:underline"
                                  >
                                    <ExternalLink size={12} />
                                    Live Demo
                                  </a>
                                )}
                              </div>
                            )}

                            {hasDetails && (
                              <AnimatePresence>
                                {isProjectExpanded && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="space-y-3 border-t border-border bg-canvas-subtle p-3 text-xs leading-5">
                                      {project.challenges && (
                                        <div>
                                          <h5 className="mb-1 font-semibold text-danger">어려웠던 점</h5>
                                          <p className="text-fg-muted">{project.challenges}</p>
                                        </div>
                                      )}
                                      {project.solutions && (
                                        <div>
                                          <h5 className="mb-1 font-semibold text-success">해결 방법</h5>
                                          <p className="text-fg-muted">{project.solutions}</p>
                                        </div>
                                      )}
                                      {project.learnings && (
                                        <div>
                                          <h5 className="mb-1 font-semibold text-accent">배운 점</h5>
                                          <p className="text-fg-muted">{project.learnings}</p>
                                        </div>
                                      )}
                                      {project.live && project.live !== '#' && (
                                        <a
                                          href={project.live}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="inline-flex items-center gap-1 text-accent hover:underline"
                                        >
                                          <ExternalLink size={12} />
                                          Live Demo
                                        </a>
                                      )}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
