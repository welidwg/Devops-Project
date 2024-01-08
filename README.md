# AutoBot

## **About Autobot**
AutoBot is an e-shop for cars , where users could find cars for sell , and they even could sell their cars. The best feature of this web application is that it uses a trained AI model to predict a car's price based on the car caractersitics (brand,kms,..)

## **Dockerization**
<p align="center"><img src="https://github.com/welidwg/Devops-Project/blob/main/screenshots/dockerization.png" width="100%"></p>
<br>


## **Jenkins Pipeline**
<p align="center"><img src="https://github.com/welidwg/Devops-Project/blob/main/screenshots/jenkins.png" width="100%"></p>
<br>

## **Deployment to kubernetes**
### Front-End (ReactJS) :
<p align="center"><img src="https://github.com/welidwg/Devops-Project/blob/main/screenshots/front_end.png" width="100%"></p>

### Back-End (NodeJS) :
<p align="center"><img src="https://github.com/welidwg/Devops-Project/blob/main/screenshots/thunder_back.png" width="100%"></p>
<br>

## **Commandes used in Kubernetes Deployment**

### Front-End
```
kubectl apply -f deployment.yaml
kubectl apply -f service-nodeport.yaml
```
### Back-End
```
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```
### MySql
```
kubectl apply -f mysql.yaml
kubectl apply -f phpmyadmin.yaml
```
## **Kubernetes Pods and Services (Lens)**

### Pods:
<p align="center"><img src="https://github.com/welidwg/Devops-Project/blob/main/screenshots/lens_pods.png" width="100%"></p>
<br>

### Services:
PS: I used port forwarding for the backend so the front could connect to localhost:5000
<p align="center"><img src="https://github.com/welidwg/Devops-Project/blob/main/screenshots/lens_service.png" width="100%"></p>
<br>
