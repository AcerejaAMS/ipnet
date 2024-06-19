#Pasos para realizar un logout a la sesion actual
#Crear nuevo archivo userActions.js 
#Importar userActions.js en el archivo footer.php {
    <script defer src="<?php echo URL_PROJECT . '/js/userActions.js'; ?>"></script>
}

#Dentro de auth.js antes de cerrar la segunda llave{
    public function logout() {
        $_SESSION['user_data_credentials'] = [];
        unset($_SESSION['user_data_credentials']);
        echo json_encode([
            "status" => true,
            "message" => "User logout"
        ])
    }
}


#Dentro de userActions{
    "user strict;"

    function logout(){
        const logoutTrigger = document.getElementById("userLogoutTrigger");
        logoutTrigger.addEventListener('click' , async e => {
            e.preventDefault();
            const sendRequest = await fetch("/redsocial/auth/logout");
            const converRequest = await sendRequest.json();

            if(converRequest.status){
                location.reload()
            }
        })
    }

    logout()
}

#Dentro del archivo navbar.php en la etiqueta{
    <div class="setting-item" id="userLogoutTrigger"> #Linea 180 en el codigo del video
}

#Pasos para realizar post{
    #Dentro de userActions.js crear una nueva funcion{
        function publicPost(){
            const publicPostTrigger = document.getElementById('post_publish_content');
            publicPostTrigger.addEventListener('submit' , async e => {
                e.preventDefault();
                const configuration = {
                    method: "POST"
                    body: formData
                }

                const sendRequest = await fetch("/redsocial/post/publicPost", configuration);
                const converRequest = await sendRequest.json();
            })
        }

        publicPost();
    }
    #Crear un nuevo archivo Post.php{
        <?php

        class Post extends Controller{
            public function __construct()
            {
                $this->post = $this->model('postModel');
            }

            public function index() 
            {
                if ($this->autenticate()){
                    $this->view('page/home');
                }else{
                    $this->view('pages/auth');
                }
            }

            public function  generateNumber($n) {
                $posibleCharacters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                $name = "";
                for ($x = 0; $x < $n; $x++){
                    for ($i = 0; $i < strlen($posibleCharacters); $i++){
                        $name += $posibleCharacters[rand(0, strlen($posibleCharacters) - 1)];
                    }
                }
                return $name;
            }

            public function publicPost() {

                if(!empty($_FILES['upload_photos']['tmp_name'])){
                    $route = dirname(dirname(dirname(__FILE__))) . "public/img/uploads/posts";
                    $ext = explode('/' , $_FILES['upload_photos']['type'])
                    $name = $this->generateNumber(15) . "." . $ext[1];

                    if (move_uploaded_file($_FILES['upload_photos']['tmp_name'] , $route)){
                        echo json_encode([
                            "UserId" => $_SESSION['user_data_credentials']['userId'],
                            "post_body" => $_POST['public_post'],
                            "path" => "/public/img/uploads/posts/" . $name
                        ]);
                    }
                }else{
                    echo json_encode([
                        "UserId" => $_SESSION['user_data_credentials']['userId'],
                        "post_body" => $_POST['public_post'],
                        "path" => null
                    ]);
                }

                
            }
        }
    }

    #Dentro de AuthVerified.php
    {
        if (isset($_SESSION['user_data_credentials'])) {
            var_dump($_SESSION['user_data_credentials']);
            return true;
        }
    }

    #Crear un nuevo archivo en models con el nombre postModel.php
    {
        <?php

        class PostModel {
            public function __construct()
            {
                $this->db = new Base;
            }
        }
    }
}