<?php
require_once('auth.php');
    if(isset($_GET['idcat'])){
        $idcat=$_GET['idcat'];
        $ReqListProduits='SELECT * FROM produits where Id_cat='.$idcat;
    }else{
        
        $ReqListProduits='SELECT * FROM produits ';
    }

$ListeProduits=$conDb->query($ReqListProduits);





?>

<html>
    <body>
        <table name="listCat" id="listCat" border="1">
                <tr>
                 <th >ID</th>
                <th >DESIGNATIONS</th>
                <th>QUANTITES</th>
                <th >PRIX</th>
                <tr>
            <?php
            while($rowsProduits=$ListeProduits->fetch()){
                ?>
                <tr>
                 <td ><?php echo $rowsProduits['Id_pro'];?></td>
                <td ><?php echo $rowsProduits['Designation'];?></td>
                <td ><?php echo $rowsProduits['Quantite'];?></td>
                <td ><?php echo $rowsProduits['Prix'];?></td>
                <tr>
            
            <?php }

            ?>
        </table>
    </body>
</html>