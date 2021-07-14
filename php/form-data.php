<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        echo 'Mensaje enviado.';
        $to = "s.montoro.hernandez@gmail.com";
        $subject = $_POST["subject"];
        $name = $_POST["name"];
        $email = "From: " . $_POST["email"] . "\r\n";
        if ($_POST["phone"]) {
            $phone = $_POST["phone"];
        } else {
            $phone = "No se ha dejado ningún teléfono de contacto.";
        }
        $message = $name . " te ha dejado la siguiente consulta:" . "\r\n" . "\r\n"
                . $_POST["message"] . "\r\n" . "\r\n"
                . "Teléfono de contacto: ". $phone . "\r\n" 
                . "Responder a: " . $_POST["email"];
        mail($to,$subject,$message,$email);
        header("Location: ../sites/form-submitted.html#thanks")
    ?>   
</body>
</html>

