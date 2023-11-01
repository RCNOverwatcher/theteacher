import React from "react";

function Object_oriented_versus_procedural_languages_using_Python___a_gentle_introduction() {
  return (
    <div id="jsn-maincontent" class="span9 order1 row-fluid">
      <div id="jsn-maincontent_inner">
        <div id="jsn-centercol">
          <div id="jsn-centercol_inner">
            <div id="jsn-mainbody-content" class="jsn-hasmainbody">
              <div id="jsn-mainbody-content-inner1">
                <div id="jsn-mainbody-content-inner2">
                  <div id="jsn-mainbody-content-inner3">
                    <div id="jsn-mainbody-content-inner4" class="row-fluid">
                      <div
                        id="jsn-mainbody-content-inner"
                        class="span12 order1"
                      >
                        <div id="jsn-mainbody">
                          <div id="system-message-container"></div>

                          <div
                            class="item-page"
                            itemscope
                            itemtype="https://schema.org/Article"
                          >
                            <meta itemprop="inLanguage" content="en-GB" />

                            <div itemprop="articleBody">
                              <p></p>
                              <h1 style="text-align: center">
                                Object oriented versus procedural languages
                                using Python&nbsp;- a gentle introduction
                              </h1>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Introduction
                                  <br />
                                </strong>
                                With procedural languages, we typically break a
                                problem down into functions. (In some languages
                                like Python, we only have functions but in other
                                languages like Pascal, there are functions and
                                procedures, each doing a similar but different
                                job). Each function in a typical solution does
                                just one task and we call this 'modular
                                programming'. To run this program, our main
                                program is simply a series of calls to the
                                different functions. We can use many programming
                                languages either in a procedural way, or using
                                an object oriented approach. Let's see an
                                example of both approaches using Python 3.
                              </p>

                              <p>
                                Here is a program that calculates an electricty
                                using a procedural approach. We have four
                                functions. The actual program is started by
                                calling the first function using main() at the
                                bottom of the code. This calls the function
                                called main() which in turn asks the user to
                                enter the number of kWh units they've used, and
                                then calls three functions. The first one
                                multiplies the units by the cost per unit. The
                                second one adds a standing charge. The third one
                                is in charge of displaying the total correctly.
                                Each function carries out one and only one job
                                (modular programming) and the main program
                                simply consists of a function call. Note, that
                                if you are unsure of any of the code e.g. the
                                formatting code for the total, then you should
                                refer to the Python course on out website.
                              </p>
                              <p>Type in this code and get it working.</p>
                              <p>
                                <img
                                  style="margin: 10px; vertical-align: middle"
                                  src="images/9699bfa1-3b8b-499e-aaa6-aeea2198db4coo1.GIF"
                                  alt="oo1"
                                />
                              </p>
                              <p>
                                What happens when you enter in a postitive whole
                                number? how about a real number? What about a
                                letter instead of a number? How about a negative
                                number? Try and make the code fail. You should
                                find, for example, that the code accepts
                                negative numbers. Is this correct? What might
                                you do about it if you think it is incorrect?
                              </p>
                              <p>Now let's look at an OO approach.&nbsp;</p>
                              <p>
                                <img
                                  style="margin: 10px; vertical-align: middle"
                                  src="images/51d6483f-a336-402e-b65a-ea5494f93e99oo2.GIF"
                                  alt="oo2"
                                />
                              </p>
                              <p>
                                You should write the code under the first
                                program you wrote and then get them both working
                                together, so you can confirm the answers are the
                                same for both programs when you run it (although
                                we haven't added an exception for our OO program
                                using try - except).
                              </p>
                              <p>
                                <strong>Classes, attributes and methods</strong>
                                <br />
                                The OO program starts by making a 'class'. This
                                is a blueprint, a template for the calculations
                                for a bill. In other programs, we might create a
                                class for a student, for example. This wouldn't
                                be for an actual student, but it is a template
                                for a student, showing what data (called
                                attributes) is being kept about the student and
                                what calculations and operations needs to happen
                                on the data (called 'methods'). Inside our
                                definition of the calculateBill class, you can
                                see the data we need to use and some of the
                                methods that can be called.
                              </p>
                              <p>
                                <strong>Objects</strong>
                                <br />
                                Once you have a class, you can then use it to
                                create actual real 'instances' of the class. An
                                instance of a class is called an object. You
                                might have a class defining what a student is,
                                but you must create an instance of the class
                                'Mary Smith' to get an actual, real student.
                                When you create an object, they have all of the
                                attributes and all of the methods defined in
                                their class. We created an object in our code
                                with this line:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>myBill = calculateBill()</strong>
                              </p>
                              <p>
                                This tells the program to create a real object
                                called myBill using the class called
                                calculateBill(). Now myBill has the methods
                                costPower and addStanding. The other method,
                                that starts with the line def __init__(self) is
                                a special method. When you&nbsp;
                              </p>
                              <p>
                                <strong>Dot notation</strong>
                                <br />
                                Once I have a real object, I can use any of the
                                methods in the object using dot notation. For
                                example, to use the method costPower, I used
                                this line:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  total1 = myBill.costPower(unitsUsed)
                                </strong>
                              </p>
                              <p>
                                <strong>MyBill.costPower(unitsUsed)</strong>{" "}
                                says to the program, '
                                <em>
                                  go to the object called myBill. Then call the
                                  method costPower using the data in unitsUsed
                                </em>
                                '.&nbsp;
                              </p>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Object_oriented_versus_procedural_languages_using_Python___a_gentle_introduction;
