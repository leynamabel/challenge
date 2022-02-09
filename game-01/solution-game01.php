<?php

function getArrayFirstPossibleSolution($arrayM, $intergerN)
{
    if (empty($arrayM)) {
        return "The array M is empty.";
    }
    if (!is_array($arrayM)) {
        return "The parameter M is not array.";
    }
    $intergerN = (int) ($intergerN);
    if ($intergerN == 0) {
        return "The parameter N must be an integer greater than zero.";
    }
    $count     = count($arrayM);
    $nextValue = 0;
    $result    = [];
    foreach ($arrayM as $key => $value) {
        for ($i = 0; $i < $count; $i++) {
            if ($key != $i) {
                $nextValue = $arrayM[$i];
                $value     = $value + 0;
                $total     = ($value + $nextValue);
                if ($total == $intergerN) {
                    break;
                }
            }
        }
        if ($total == $intergerN) {
            $result[] = $value;
            $result[] = $nextValue;
            break;
        }
    }
    if (empty($result)) {
        return "There are no numbers in the array whose sum equals to $intergerN";
    }
    return $result;
}

//--------------- SOME TESTS -------------
// Scenario 1:
$test = getArrayFirstPossibleSolution( [2, 5, 8, 14, 0], 10);      // Result: [2, 8]

// // Scenario 2:
//$test = getArrayFirstPossibleSolution([2, 5, 1, 14, 5], 10);     // Result: [5, 5]

// // Scenario 3:
//$test = getArrayFirstPossibleSolution([1, 5, 1, 7, 3, 10], 10);  // Result: [7, 3]

// // Scenario 4:
//$test = getArrayFirstPossibleSolution([0, 5, 1, 7, 3, 10], 10);  // Result: [0, 10]

// // Scenario 5:
// $test = getArrayFirstPossibleSolution([], 10);                  // Result: The array M is empty.

// // Scenario 6:
// $test = getArrayFirstPossibleSolution([0, 1, 2, 2, 1, 3], 10);  // There are no numbers in the array whose sum equals to 10

// // Scenario 7:
// $test = getArrayFirstPossibleSolution([0, 1, 2, 2, 1, 3], "" ); // The parameter N must be an integer greater than zero.


print_r($test);
?>
