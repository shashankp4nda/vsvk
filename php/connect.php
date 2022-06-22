<?php 
    $conn = mysqli_connect('localhost', 'root', '', 'Form');
    if(!$conn)
    {
        die('Could not connect' .mysqli_error());
    }

   if(isset($_POST['submit']))
   {
       $firstName = $_POST['firstName'];
       $lastName =$_POST['lastName'];


       $sql = "insert into registrationOne values('$firstName','$lastName');";
       $result = mysqli_query($conn, $sql);

       if($result)
       {
         $url = 'index.html';
         header('Location:'.$url);
       }

    }

    mysqli_close($conn);
?>