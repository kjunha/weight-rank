# 웨이트 랭킹 서비스 (가칭)

### 개발환경 local database 구동 방법

docker-compose 및 mysql-client 설치

```sh
  # docker compose 로 로컬 mysql db 실행
  > docker-compose up -d
  # mysql client 로 연결 (비밀번호: mypass)
  > mysql -u root -p --host 127.0.0.1 --port 3307
  # mysql db 종료
  > docker-compose down
```

- db 데이터는 db/data 폴더 안에 저장되고, 컨테이너 재시작 하더라도 db 정보 유지 가능 (volume mount)
- db 초기화를 위해서는 db/data 폴더를 삭제하고 다시 docker-compose 로 db 실행하면 data 폴더가 생성되면서 새로운 db 와 테이블이 저장됨
