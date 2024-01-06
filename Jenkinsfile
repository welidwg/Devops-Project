pipeline {
    agent any

    environment {
        PATH="${NODEJS_HOME}/bin:${PATH}"
        DOCKERHUB_CREDENTIALS = credentials('dh_cred')
    }
 
    stages {
   

        stage('Init docker'){
            steps{
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }

        stage('Build docker'){
            steps{
               
                 dir('app') {         
                    sh 'docker build -t $DOCKERHUB_CREDENTIALS_USR/cars-image:latest .'   
                }     
                dir('back') {         
                    sh 'docker build -t $DOCKERHUB_CREDENTIALS_USR/cars-backend:latest .'   
                }       
            }
        }

        stage('Deliver docker'){
            steps{
                dir('app') {         
                    sh 'docker push $DOCKERHUB_CREDENTIALS_USR/cars-image:latest'   
                }  
                 dir('back') {         
                    sh 'docker push $DOCKERHUB_CREDENTIALS_USR/cars-backend:latest'   
                }      
            }
        }

        /*stage('Deploy to kubernate'){
            steps{
                dir('app') {         
                    sh 'kubectl apply -f deployment.yaml'   
                    sh 'kubectl apply -f service-nodeport.yaml'   
                }  
                 dir('back') {         
                    sh 'kubectl apply -f deployment.yaml'   
                    sh 'kubectl apply -f service.yaml'    
                }
                sh 'kubectl apply -f mysql.yaml'         
            }
        }*/

        stage('Cleanup docker'){
            steps{
          
                dir('app') {         
                    sh 'docker rmi $DOCKERHUB_CREDENTIALS_USR/cars-image:latest'   
                }  
                 dir('back') {         
                    sh 'docker rmi $DOCKERHUB_CREDENTIALS_USR/cars-backend:latest'   
                }  
                sh 'docker logout'
            }
        }

    }
}