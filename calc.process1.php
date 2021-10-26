<?php

//Addition: kann nur ausgerechnet werden, wenn alle drei SEiten eingegeben sind
/*
Sinus und Kosinus Werte zwischen speichern um den Tangensatz zu ausrechnen
*/
function compute()
{
    $numA = $_POST['sideA'];
    $numB = $_POST['sideB'];
    $numC = $_POST['sideC'];
    $sinus1 = $_POST['sinus'];
    $cosinus1 = $_POST['cosinus'];

    $sinus = "";
    $cosinus = "";

    function phythagorasC($numA,$numB, $numC) {
        $sqC = ($numA * $numA) + ($numB * $numB);
            $C = sqrt($sqC);
            return $C;
    }
    function phythagorasA($numA,$numB, $numC) {
        $sqA = ($numC * $numC) - ($numB * $numB);
            $A = sqrt($sqA);
            return $A;
    }
    function phythagorasB($numA,$numB, $numC) {
        $sqB = ($numC * $numC) - ($numA * $numA);
            $B = sqrt($sqB);
            return $B;
   }

    switch($_POST['dropdown'])
    {
        case "Addition":
            $ad =  $numA+$numB+ $numC;
            return $ad;
            break;     

        case "Pythagoras":  
                if (empty($numC)){
                    return phythagorasC($numA,$numB,$numC);
                  }elseif(empty($numA)){
                      return phythagorasA($numA, $numB, $numC);
                  }elseif(empty($numB)){
                      return phythagorasB($numA, $numB, $numC);
                  }
           
        case "Sinus":
            $sinus = $numA / $numC;
            return $sinus;
            break;

        case "cosinus":
            $cosinus = $numB / $numC;
            return $cosinus;
            break;
                    
        case "Tangenssatz":
                        $tangen = $sinus1 / $cosinus1;
                        return $tangen;
                        break;
                    
        default:
            echo "invalid operation";
    }
}

echo "The result is: " .compute();
?>
<br>
<a href = "calc.php"> Zurück </a>

