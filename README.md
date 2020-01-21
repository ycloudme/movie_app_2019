# 2020.01.21
1. npx create-react-app movie_app_2019
2. node, npm 버전에 의해 npx create-react-app 실행시, sample 대로 설치된다.
   1. node, npm, yarn 등을 완전히 삭제 후 brew를 통해 재설치 
   <https://gomugom.github.io/how-to-remove-node-from-macos/>

   아래는 간략히 정리된 내용
   npm config get prefix
   cd lib && rm -rf node_modules
   
   lsbom -f -l -s -pf /var/db/receipts/org.nodejs.pkg.bom | while read f; do  sudo rm /usr/local/${f}; done
   sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /var/db/receipts/org.nodejs.*
   
   오류가 날 경우 다음도 시도해보자.
   lsbom -f -l -s -pf /var/db/receipts/org.node.pkg.bom | while read f; do  sudo rm /usr/local/${f}; done
   sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /var/db/receipts/org.node.*
   
   엘 캐피탄 이상에서는 이렇게 해야 될 수도 있다.
   lsbom -f -l -s -pf /var/db/receipts/org.nodejs.node.pkg.bom | while read f; do  sudo rm /usr/local/${f}; done
   sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /var/db/receipts/org.nodejs.*
   
   /usr/local/lib 경로의 node로 시작하는 모든 것(node, node_modules 등)을 삭제한다.
   cd /usr/local/lib && sudo rm -rf node*
   
   /usr/local/include 경로의 node로 시작하는 모든 것(node, node_modules 등)을 삭제한다.
   cd /usr/local/include && sudo rm -rf node*
   
   혹시라도 brew로 node를 설치해놓고 기억을 못하고 있을 수도 있으니, brew로는 node를 설치하지 않았음이 확실치 않다면 그냥 아래도 돌려보자.
   brew uninstall node
   
   /usr/local/bin 경로 내의 node 및 npm을 삭제한다.
   cd /usr/local/bin
   sudo rm -rf npm
   sudo rm -rf node
   
   혹시 모르니 아래도 한 번씩 돌려주면 좋다.
   sudo rm -rf /usr/local/share/man/man1/node.1
   sudo rm -rf /usr/local/lib/dtrace/node.d
   sudo rm -rf ~/.npm