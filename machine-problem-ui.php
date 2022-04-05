<?php    
    if(isset($_GET["id"])){
        $problem = $_GET["problem"];
        $id = $_GET["id"];

        if($id == 1){
            $question = "Create a program that will find the area of the triangle given its base and height.";
            $sampleInput = "&nbsp;&nbsp;&nbsp; (2, 5) &nbsp;&nbsp; (5, 20) &nbsp;&nbsp; (7, 22) <br>";
            $sampleOutput = "&nbsp; (5) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (50) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (77)";
            $solution = "
                            // Solution Code Below <br>
                            gawain areaToTriangle(base, height) { <br>
                                &nbsp;&nbsp;&nbsp; ibalik 0.5*(base*height); <br>
                            } <br><br>

                            kilalanin area = areaToTriangle(base, height); <br><br>
                            ipakita area;
                        ";
        }
        if($id == 2){
            $question = "Create a program that will convert a temperature from celsius to fahrenheit.";
            $sampleInput = "&nbsp;&nbsp;&nbsp; (2) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (4) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (6) <br>";
            $sampleOutput = "&nbsp; (35.6) &nbsp;&nbsp; (39.2) &nbsp;&nbsp; (42.8) <br>";
            $solution = "
                            // Solution Code Below <br>
                            gawain celsiusToFahrenheit(temperature) { <br>
                                &nbsp;&nbsp;&nbsp; ibalik (1.8 * temperature)+32; <br><br>
                            } <br><br>            

                            kilalanin temperature = celsiusToFahrenheit(temperature); <br><br>
                            ipakita temperature;
                        ";
        }
        if($id == 3){
            $question = "Given two inputs representing the days it takes for work to be done individually by two persons, create a program that will calculate the time it takes if the two persons work together.";
            $sampleInput = "&nbsp;&nbsp;&nbsp; (6, 10) &nbsp;&nbsp; (10, 3) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (4, 8) <br>";
            $sampleOutput = "&nbsp; (3.75) &nbsp;&nbsp;&nbsp; (2.30769) &nbsp;&nbsp; (2.66667)";
            $solution = "
                            // Solution Code Below <br>
                            gawain pagTulungan(araw1, araw2) { <br>
                                &nbsp;&nbsp;&nbsp;  ibalik (araw1 * araw2) / (araw1 + araw2); <br><br>
                            } <br><br>             

                            kilalanin total = pagTulungan(araw1, araw2); <br><br>
                            ipakita total;
                        ";
        }
        if($id == 4){
            $question = "Write a program that will find out if a given year is a leap year or not.";
            $sampleInput = "&nbsp;&nbsp;&nbsp;&nbsp; (4) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (6) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (8) <br>";
            $sampleOutput = "&nbsp; (tama) &nbsp;&nbsp;&nbsp; (mali) &nbsp;&nbsp; (tama)";
            $solution = "
                            // Solution Code Below <br>
                            gawain leapYearBa(taon) { <br>
                                &nbsp;&nbsp;&nbsp;  kung ((taon % 4 == 0) at (taon % 100 != 0)) { <br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ibalik tama; <br>
                                &nbsp;&nbsp;&nbsp; } <br>
                                &nbsp;&nbsp;&nbsp; kundiman kung (taon % 400 == 0) { <br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ibalik tama; <br>
                                &nbsp;&nbsp;&nbsp; } <br>
                                &nbsp;&nbsp;&nbsp; kundiman ibalik mali; <br>
                            } <br><br>             

                            kilalanin isLeapYear = leapYearBa(taon); <br><br>
                            ipakita isLeapYear;
                        ";
        }
        if($id == 5){
            $question = "Write a program that will find out if a given age input is eligible for casting their own vote.";
            $sampleInput = "&nbsp;&nbsp;&nbsp; (17) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (20) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (15) <br>";
            $sampleOutput = "&nbsp; (mali) &nbsp;&nbsp; (tama) &nbsp;&nbsp; (mali)";
            $solution = "
                            // Solution Code Below <br>
                            gawain isEligibleToVote(age) { <br>
                                &nbsp;&nbsp;&nbsp; kung (age < 18) ibalik mali; <br>
                                &nbsp;&nbsp;&nbsp; ibalik tama; <br>
                            } <br><br>

                            kilalanin isEligible = isEligibleToVote(age); <br><br>
                            ipakita isEligible;
                        ";
        }
        if($id == 6){
            $question = "Write a program to read the value of an integer m and display the value of n as 1 if m is larger than 0, 0 if m is equal to 0, and -1 if m is less than 0.";
            $sampleInput = "<br>";
            $sampleOutput = "";
            $solution = "";
        }
        if($id == 7){
            $question = "Write a program that will print all even numbers from 1 to n.";
            $sampleInput = "<br>";
            $sampleOutput = "";
            $solution = "";
        }
        if($id == 8){
            $question = "Write a program that will print all prime numbers from 1 to n.";
            $sampleInput = "<br>";
            $sampleOutput = "";
            $solution = "";
        }
        if($id == 9){
            $question = "Write a program that will print the fibonacci series up to n terms.";
            $sampleInput = "<br>";
            $sampleOutput = "";
            $solution = "";
        }
        if($id == 10){
            $question = "Write a program that will find the square of any number using a function.";
            $sampleInput = "<br>";
            $sampleOutput = "";
            $solution = "";
        }
        if($id == 11){
            $question = "Write a program that will swap any two numbers using a function.";
            $sampleInput = "<br>";
            $sampleOutput = "";
            $solution = "";
        }
        if($id == 12){
            $question = "Write a program that will convert a number in base 10 to binary.";
            $sampleInput = "<br>";
            $sampleOutput = "";
            $solution = "";
        }
        if($id == 13){
            $question = "Write a program that will generate all binary strings without consecutive 1s using recursion.";
            $sampleInput = "<br>";
            $sampleOutput = "";
            $solution = "";
        }
        if($id == 14){
            $question = "Write a program that will calculate the sum of all numbers from 1 to n using recursion.";
            $sampleInput = "<br>";
            $sampleOutput = "";
            $solution = "";
        }
        if($id == 15){
            $question = "Write a program to print the fibonacci series using recursion.";
            $sampleInput = "<br>";
            $sampleOutput = "";
            $solution = "";
        }
        if($id == 16){
            $question = "Create a program that implements any type of sorting algorithm.";
            $sampleInput = "<br>";
            $sampleOutput = "";
            $solution = "";
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="img/icon.png" type="image/x-icon">
    <title> Machine Problem No. <?php echo $id ?></title>
    <link rel="stylesheet" href="css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" defer></script>
    <script src="js/fontAwesomeIcon.js"></script>
    <script src="js/machine-problem-script.js" defer></script>
    <script src="js/fileSaver.js" defer></script>
</head>
    <body>
        <div class="logo-container">
            <div class="title">
                <h2 id="awit"> Awit </h2>
                <div class="line"></div>
                <p id="interpreter"> Interpreter </p>
            </div>
        </div>
        <div class="problem-container">
            <?php
                echo $problem . " Problem <br>";
                if(isset($question)){
                    echo "Question: " . $question . "<br><br>";
                    echo "Sample Input: " . $sampleInput;
                    echo "Sample Output: " . $sampleOutput;
                }
                
            ?>
        </div>
        <div class="solution-container">
            <button class="solution-button"> Show Solution </button>
        </div>
        <div class="problem-solution-container" style="display: none;">
            <?php echo $solution ?>
        </div>
        <div class="container">
            <div id="menu" class="menu-container">
                <div class="dropdown" data-drowpdown>
                    <button class="options" data-drowpdown-button> File </button>
                    <div class="dropdown-menu">
                        <button id="file-new" class="options" data-drowpdown-button> New </button>
                        <input type="file" id="file-open" class="options" data-drowpdown-button>
                        <button class="options" data-drowpdown-button> <label for="file-open"> Open </label> </button>
                        <button id="file-save" class="options" data-drowpdown-button> Save </button>
                        <button id="file-save-as" class="options" data-drowpdown-button> Save As </button>
                        <button id="about-page" class="options"> About </button>
                    </div>
                </div>
                <div class="dropdown" data-drowpdown>
                    <button class="options" data-drowpdown-button> Font </button>
                    <div class="dropdown-menu">
                        <button id="SansSerif" class="options" data-drowpdown-button> Sans Serif </button>
                        <button id="TimesNewRoman" class="options" data-drowpdown-button> Times New Roman </button>
                        <button id="CourierNew" class="options" data-drowpdown-button> Courier New </button>
                        <button id="Georgia" class="options" data-drowpdown-button> Georgia </button>
                        <button id="SegoeUI" class="options" data-drowpdown-button> Segoe UI </button>
                    </div>
                </div>
                <div class="dropdown" data-drowpdown>
                    <button class="options" data-drowpdown-button> Font Size </button>
                    <div class="dropdown-menu">
                        <button id="fontSize10" class="options" data-drowpdown-button> 10 </button>
                        <button id="fontSize12" class="options" data-drowpdown-button> 12 </button>
                        <button id="fontSize16" class="options" data-drowpdown-button> 16 </button>
                        <button id="fontSize18" class="options" data-drowpdown-button> 18 </button>
                        <button id="fontSize24" class="options" data-drowpdown-button> 24 </button>
                        <button id="fontSize36" class="options" data-drowpdown-button> 36 </button>
                        <button id="fontSize48" class="options" data-drowpdown-button> 48 </button>
                    </div>
                </div>
                <a href="documentation.html" target="_blank" class="options"> Help </a>
                <a href="machine-problem.php" target="_blank" class="options"> Machine Problem </a>
                <button class="options" onclick="executeCodes()">
                    Run
                    <i class="fas fa-play"></i>
                </button>
                <div class="adjust-mode">
                    <span id="dark">
                        <i class="fas fa-moon"></i>
                    </span>
                    <span id="light">
                        <i class="far fa-moon"></i>
                    </span>
                </div>
            </div>
            <div class="text-editor-container">
                <div class="left-container">
                    <textarea id="text-area" autofocus placeholder="Type the codes here..."></textarea>
                </div>
                <div class="right-container">
                    <div class="content">
                        <p class="text-title"> Text Output </p>
                        <textarea class="text" id="text-output" rows="8" disabled></textarea>
                    </div>
                </div>
            </div>
        </div>

        <!-- About Information -->
        <div class="modal-container">
            <div class="modal">
                <div class="modal-header">
                    <div class="title"> About AWIT Interpreter </div>
                    <button class="close-button">
                        <i class="far fa-times-circle"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="body-content">
                        <div class="body-title">
                            AWIT
                        </div>
                        <p>
                            <i>“AWIT”</i> which stands for, <i>“Algorithm written in Tagalog”</i>, complete with its own syntaxes, 
                            and built-in virtual machine whose main purpose is the accurate and precise analysis of algorithms that exist. 
                            However, it will not be strictly in Tagalog but in the Filipino language and the reason for the naming is to 
                            preserve the Filipino word, “AWIT” instead of “AWIF”. This will be a great educational programming language for 
                            Filipino freelancers, students or professional developers who have interest in both algorithms and programming languages.
                        </p>
                    </div>
                    <div class="body-content">
                        <div class="body-title">
                            Appreciation
                        </div>
                        <p>
                            The language implementation was based on <a href="https://github.com/munificent/craftinginterpreters" target="_blank">LOX's clox implementation</a>. 
                            From the scanner to the compiler to the VM heck even the Garbage Collector. Although there are a lot of significant differences, 
                            the implementations were highly inspired by <a href="https://craftinginterpreters.com" target="_blank">Nystrom's Crafting Interpreters</a>. Again, thank you!
                        </p>
                    </div>
                    <div class="body-content">
                        <div class="body-title">
                            AWIT ay?
                        </div>
                        <p>
                            <ul> 
                                <li> Scripting language </li>
                                <li> High-level language (follows C-style programming) </li>
                                <li> Dynamically typed </li>
                                <li> Interpreted (it's actually a hybrid interpreter since the implementation first compiles to bytecode then be interpreted by the Virtual Machine) </li>
                                <li> Managed language (AWIT has its own Garbage Collector) </li>
                                <li> Finally, it is Turing-complete </li>
                            </ul>
                        </p>
                    </div>
                    <div class="body-content">
                        <div class="body-title">
                            Authors
                        </div>
                        <p>
                            <a href="https://github.com/Philiks" target="_blank"> Felix Janopol Jr. </a> <br>
                            <a href="https://github.com/waffy-kun" target="_blank"> Raffy Wamar </a> <br>
                            <a href="https://github.com/Markmella" target="_blank"> Mark Julius Mella </a> <br>
                        </p>
                    </div>
                    <div class="body-content">
                        <div class="body-title">
                            License
                        </div>
                        <p>
                            This project is licensed under the MIT <a href="https://github.com/Philiks/AWIT/blob/main/LICENSE" target="_blank">License</a> - see the LICENSE file for details.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer-container">
            Copyright &copy; 2021 Awit. All Rights Reserved
        </div>

        <script>
            const btnShowSolution = document.querySelector(".solution-container");
            const containerShowSolution = document.querySelector(".problem-solution-container");

            btnShowSolution.addEventListener("click", ()=> {
                containerShowSolution.style.display = "block";
            });
        </script>
    </body>
</html>