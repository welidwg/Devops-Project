pipeline {
    agent any
    
    stages {
        stage('Initialization') {
            steps {
                echo 'Initializing...'
                // You can set global variables or perform any other initialization here
            }
        }

        stage('Build') {
            steps {
                echo 'Building the Docker image...'
                // Use Dockerfile to build the Docker image
                script {
                    docker.build("your-docker-image-name:latest")
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Add your testing steps here (e.g., unit tests or integration tests)
            }
        }

        stage('Push to Docker Registry') {
            steps {
                echo 'Pushing the Docker image to the registry...'
                // Push the Docker image to the Docker registry
                script {
                    docker.withRegistry('https://your-docker-registry', 'credentials-id') {
                        docker.image("your-docker-image-name:latest").push()
                    }
                }
            }
        }

        stage('Cleanup') {
            steps {
                echo 'Cleaning up...'
                // Clean up any temporary files or resources
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded! Deployment to Kubernetes can be triggered here.'
            // You can trigger Kubernetes deployment or other actions upon successful build
        }

        failure {
            echo 'Pipeline failed! Take necessary actions...'
            // You can perform cleanup or notify teams in case of failure
        }
    }
}
