<?php
    //Random password
    //$s = substr(md5(rand()), 0, 32);
    session_start();
    require_once('mysqli_connect.php');

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    require_once('PHPMailer/src/Exception.php');
    require_once('PHPMailer/src/PHPMailer.php');
    require_once('PHPMailer/src/SMTP.php');

    function random_str($length, $keyspace = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
    {
        $pieces = [];
        $max = mb_strlen($keyspace, '8bit') - 1;
        for ($i = 0; $i < $length; ++$i) {
            $pieces []= $keyspace[random_int(0, $max)];
        }
        return implode('', $pieces);
    }

    $reset_email = $_POST['email'];
    $mail = new PHPMailer(true);                              // Passing `true` enables exceptions
    $type = 'email';                    //only email used to signup is valid
    if(filter_var($reset_email, FILTER_VALIDATE_EMAIL)){
        try {
            $select_sql = "SELECT * FROM users WHERE email = '$reset_email' AND `type` = '$type'";
            $result = mysqli_query($dbc,$select_sql);
            if(mysqli_num_rows($result) > 0){
                //Server settings
                $row = mysqli_fetch_assoc($result);
                //TODO: update password
                $random_password = random_str(10);
                $md5_random_password = md5($random_password);
                $update_sql = "UPDATE users SET password = '$md5_random_password' WHERE email = '$reset_email' AND `type` = '$type'";
                $update_result = mysqli_query($dbc,$update_sql);
                


                // $mail->SMTPDebug = 2;                                 // Enable verbose debug output
                $mail->SMTPDebug = 0;                                 // Enable verbose debug output
                $mail->isSMTP();                                      // Set mailer to use SMTP
                $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
                $mail->SMTPAuth = true;                               // Enable SMTP authentication
                $mail->Username = 'ecombk2018@gmail.com';                 // SMTP username
                $mail->Password = 'bachkhoaquocte2018';                           // SMTP password
                $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
                $mail->Port = 587;                                    // TCP port to connect to
        
                //Recipients
                $mail->setFrom('ecombk2018@gmail.com', 'Mailer');
                $mail->addAddress($reset_email);               // Name is optional
        
                // //Attachments
                // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
                // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
        
                //Content
                // $mail->isHTML(true);                                  // Set email format to HTML
                $mail->Subject = 'Reset Password';
                $mail->Body    = 'Your password is temporary set to '.$random_password;
                $mail->AltBody = 'Your password is temporary set to '.$random_password;
        
                $mail->send();
                echo json_encode(array(
                    "status" => 1,
                    "message" => "Message has been sent. Please check your inbox"
                )); 
            }
            else{
                echo json_encode(array(
                    "status" => -1,
                    "message" => "Email not registered"
                ));
            }
        } catch (Exception $e) {
            echo json_encode(array(
                "status" => -2,
                "message" => "Message could not be sent. Mailer Error"
            ));
        }
    }

?>