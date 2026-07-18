NPTE-PT Study App — Cloudflare Pages 배포 파일
================================================

📁 폴더 구조
├── index.html          앱 본체 (수정 불필요)
├── manifest.json       PWA 설정 (수정 불필요)
├── sw.js               오프라인 캐시 (수정 불필요)
├── icon-192.png        앱 아이콘
├── icon-512.png        앱 아이콘
└── explanations/       해설 파일 폴더
    ├── _template.html  해설 작성 템플릿 (복사해서 사용)
    ├── 2016_A_Q2.html  샘플 해설
    ├── 2016_A_Q3.html  샘플 해설
    └── 2016_A_Q8.html  샘플 해설

📝 해설 파일 추가 방법
1. _template.html 복사
2. 파일명 변경: 소스_Q번호.html (예: 202032N_Q15.html)
3. 내용 편집 (메모장 또는 VS Code)
4. Cloudflare Pages에 재업로드

🔗 구글 시트 연결
explanation_url 컬럼에 아래 형식으로 입력:
https://npte-study.pages.dev/explanations/2016_A_Q2.html

📌 파일명 규칙
소스이름_Q문제번호.html
예: 2016_A_Q2.html / 202032N_Q15.html / 2021PTE-S1_Q100.html
