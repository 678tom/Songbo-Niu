<?php
    $title = "Edit User Role";
    include_once "../includes/components/adminHeader.php";
    // Prevent Direct access and prevent non-admin's to access
    RestrictAdmin(CheckRole($_SESSION['User_ID']));
    defined('_DEFVAR') or exit(header('Location: ../index.php'));
?>

<div class="container my-5 py-5 z-depth-1">

    <!--Section: Content-->
    <section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">


        <!--Grid row-->
        <div class="row d-flex justify-content-center">

            <!--Grid column-->
            <div class="col-md-6">

                <!-- Default form login -->
                <form class="text-center" method="post">
                    <?php
                        displayUserTeamAndRole();
                        if(isset($_GET["userID"])){
                            $userID = $_GET["userID"];
                        }
                    ?>
                    <br>
                    <!-- Sign in button -->
                    <button name="changeUserRole" class="btn btn-info btn-block my-4" type="submit">Submit</button>

                </form>
                <!-- Default form login -->
                <?php

                if(isset($_POST["changeUserRole"])){
                        changeUserInformation($userID);
                }
                ?>
            </div>
            <!--Grid column-->
        </div>
        <!--Grid row-->


    </section>
    <!--Section: Content-->


</div>

<?php
    include_once '../includes/components/footer.php'
?>
