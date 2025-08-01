# 🩺 Dr.Link - Remote Medical Collaboration Platform

> 지역 간 의료격차 해소를 위한 공공 원격 협진 플랫폼  
> A web-based system enabling seamless real-time collaboration between local clinics and specialists.

---

## 📌 About

**Dr.Link**는 보건소와 상급 의료기관 간의 원격 협진을 지원하는 플랫폼입니다.  
의사 부재 지역에서도 전문의 자문을 받을 수 있도록 설계되어,  
**의료 사각지대 해소와 진료의 신뢰성 확보**를 목표로 합니다.

---

## 🚀 Key Features

### 👥 사용자 유형

- **보건소 의료진**: 협진 요청, 자문서 작성, 기록 조회
- **상급 병원 전문의**: 협진 요청 수락, 채팅/화상 협진, 소견서 작성
- **관리자**: 인증 관리, 접근 로그 확인

### 📂 주요 기능

- 기관 인증 기반 로그인
- 상급 병원 목록 및 전문의 정보 조회
- 협진 요청서 등록 및 실시간 요청
- 실시간 채팅 및 화상 협진 기능
- 전문의 소견서 작성 및 저장 (PDF 발급 포함)
- 협진 기록 자동 저장 및 조회
- 접근 로그 및 보안 감사 기능

---

## 🛠️ Tech Stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Linting**: ESLint (with TypeScript support)

---

## 🗂️ Directory Structure

```
/src

```

---

## 🧭 User Flow

1. 기관 인증 → 상급병원 조회
2. 협진 요청서 작성 및 전송
3. 실시간 채팅/화상 협진 진행
4. 전문의 소견서 작성 및 저장
5. 협진 내용 요약 저장 및 기록 열람
