<?php

function getArrayFirstPossibleSolution(array $arrayM, int $intergerN)
{
    try {
        if (empty($arrayM)) {
            throw new Exception("The array M is empty.");
        }
        $arrayAux = [];
        for ($i = 0; $i < count($arrayM); $i++) {
            if ($arrayM[$i] <= $intergerN ) {
                $numberToSum = $intergerN - $arrayM[$i];
                $arrayAux[$i] = $numberToSum;
                $j = 0;
                while ($j < $i) {
                    if (isset($arrayAux[$j]) && $arrayAux[$j] == $arrayM[$i]) {
                        return [$arrayM[$j], $arrayM[$i]];
                    }
                    $j++;
                }
            }
        }
        return "There are no numbers in the array whose sum equals to $intergerN.";
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}
//--------------- SOME TESTS -------------
// Scenario 1:
//$test = getArrayFirstPossibleSolution( array(1, 11, 2, 8, 12), 10);      // Result: [2, 8]
// // Scenario 2:
//$test = getArrayFirstPossibleSolution([2, 5, 1, 14, 5], 10);     // Result: [5, 5]
// // Scenario 3:
//$test = getArrayFirstPossibleSolution([1, 5, 1, 7, 3, 10], 10);  // Result: [7, 3]
// // Scenario 4:
//$test = getArrayFirstPossibleSolution([0, 4, 1, 6, 3, 10], 11);  // Result: [4, 6]
// // Scenario 5:
// $test = getArrayFirstPossibleSolution([0, 1, 2, 2, 1, 3], 10);  // There are no numbers in the array whose sum equals to 10
// // Scenario 6:
//$test = getArrayFirstPossibleSolution([], 12);  //The array M is empty.
print_r($test);
?>
