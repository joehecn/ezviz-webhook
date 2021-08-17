``` bash
scp -i /Users/hemiao/pem/m21.cer /Users/hemiao/joe/v3/ezviz-webhook/Dockerfile root@47.242.32.120:/root/ezviz-webhook
scp -i /Users/hemiao/pem/m21.cer /Users/hemiao/joe/v3/ezviz-webhook/package.json root@47.242.32.120:/root/ezviz-webhook
scp -i /Users/hemiao/pem/m21.cer -r /Users/hemiao/joe/v3/ezviz-webhook/src root@47.242.32.120:/root/ezviz-webhook

ssh -i /Users/hemiao/pem/m21.cer root@47.242.32.120

cd ezviz-webhook

docker build -t joe/webhook:1.0.0 .
docker run --restart=always -d -p 7766:7766 -v /"$PWD"/src:/server/src -v /"$PWD"/logs:/server/logs --log-opt max-size=500m --log-opt max-file=1 --name webhook joe/webhook:1.0.0
```