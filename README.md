## Getting Started
> docker 를 활용한 React 및 Express 컨테이너 발행

* 필수 설치 항목
    - [Git](https://git-scm.com/downloads)
    - [Docker](https://www.docker.com/)
    - [Docker-compose](https://docs.docker.com/compose/install/)
    - [Nodejs(15.x.x 이상)](https://nodejs.org/ko/)

### Installation
```
git clone https://github.com/sbjang123456/docker-fullstack.git
cd docker-fullstack/packages/client
npm install
npm run build
cd ../../
docker-compose up -d
```

### Development
- npm workspaces 활용으로 인한 npm 7.x 버전을 사용 하였다.
```
npm install
npm run dev
```

## Notes
### Docker Compose 명령어 정리
* UP
> 컴포즈 파일에 정의된 모든 컨테이너 실행. 그 로그 결과를 취합.

* Build
> 도커파일에 의해 만들어진 이미지를 리빌드.
> up 명령어는 이미지가 존재하지 않는 경우 이를 빌드하지 않기 때문에 이미지를 업데이트해야 하는 경우 이 명령어를 사용.

* ps
> 컴포즈에 의해 관리되는 컨테이너들의 상태 표시.

* run
> one-off 명령으로 컨테이너 실행.

* logs
> 컴포즈가 관리하는 컨테이너들에 대한 로그 취합.

* stop
> 컨테이너 중지 (삭제는 안함)

* rm
> 중지된 컨테이너 삭제.

* -v
> 볼륨옵션을 사용하여 도커에서 관리하는 볼륨들을 삭제하는것이 필수.
