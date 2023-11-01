import React from "react";

function Validation_and_verification_using_while_loops_in_algorithms_and_programs() {
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
                                Validation and verification using while
                                loops&nbsp;in algorithms and programs
                              </h1>
                              <p>
                                <strong style="line-height: 1.5">
                                  Validation using while loops
                                  <br />
                                </strong>
                                A frequently used technique to validate data is
                                to use a while loop. The user has to enter in a
                                value, until either the value is correct or they
                                have used up the amount of goes they are
                                allowed. Here is an example of this.
                              </p>

                              <p>
                                The user must enter in the correct password. If
                                it is incorrect, they can try again, but they
                                are only allowed three goes before their account
                                is locked and they have to contact the Network
                                Manager.
                              </p>
                              <p style="margin-left: 30px">
                                <strong style="line-height: 1.5">
                                  <strong style="line-height: 16.3636360168457px">
                                    1 &nbsp; &nbsp;password = "tHe+tr33s"
                                    <br />
                                  </strong>
                                  <span style="line-height: 16.3636360168457px">
                                    2 &nbsp; &nbsp;
                                  </span>
                                  <br style="line-height: 16.3636360168457px" />
                                  <strong style="line-height: 16.3636360168457px">
                                    3 &nbsp; &nbsp;counter = 1
                                  </strong>
                                  <br style="line-height: 16.3636360168457px" />
                                  <strong style="line-height: 16.3636360168457px">
                                    4 &nbsp; &nbsp;guess = input("Please enter
                                    password &gt;&gt;&gt; ")
                                    <br />
                                  </strong>
                                  <span style="line-height: 16.3636360168457px">
                                    5 &nbsp; &nbsp;
                                  </span>
                                  <br style="line-height: 16.3636360168457px" />
                                  <strong style="line-height: 16.3636360168457px">
                                    6 &nbsp; &nbsp;while (guess!=password) and
                                    (counter&lt;3):
                                  </strong>
                                  <br style="line-height: 16.3636360168457px" />
                                  <strong style="line-height: 16.3636360168457px">
                                    7 &nbsp; &nbsp; &nbsp; &nbsp;guess =
                                    input("Please enter password &gt;&gt;&gt; ")
                                  </strong>
                                  <br style="line-height: 16.3636360168457px" />
                                  <strong style="line-height: 16.3636360168457px">
                                    8 &nbsp; &nbsp; &nbsp; &nbsp;counter =
                                    counter + 1
                                  </strong>
                                  <br style="line-height: 16.3636360168457px" />
                                  <strong style="line-height: 16.3636360168457px">
                                    9 &nbsp; &nbsp;
                                    <br />
                                    10 &nbsp; if guess == password:
                                  </strong>
                                  <br style="line-height: 16.3636360168457px" />
                                  <strong style="line-height: 16.3636360168457px">
                                    11 &nbsp; &nbsp; &nbsp;print("You have
                                    entered the correct password. You may
                                    continue.")
                                  </strong>
                                  <br style="line-height: 16.3636360168457px" />
                                  <strong style="line-height: 16.3636360168457px">
                                    12 &nbsp; elif counter &gt;= 3:
                                  </strong>
                                  <br style="line-height: 16.3636360168457px" />
                                  <strong style="line-height: 16.3636360168457px">
                                    13 &nbsp; &nbsp; &nbsp;print("Incorrect
                                    password. Your account has been locked.
                                    Please contact the Network Manager")&nbsp;
                                  </strong>
                                  <br style="line-height: 16.3636360168457px" />
                                  <strong style="line-height: 16.3636360168457px">
                                    14
                                    <br />
                                    15 &nbsp; input("Press &lt;ENTER&gt; to quit
                                    &gt;&gt;&gt;&gt;")
                                  </strong>
                                </strong>
                              </p>
                              <p>
                                You frequently have to enter in a number between
                                two values. You can validate the data entry
                                using a while loop in a similar way to the
                                above. For example:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  guess = int(input('Please enter a whole number
                                  between 1 and 10 &gt;&gt;&gt; '))
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  while (guess &lt; 1) or (guess &gt; 10):
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; guess = int(input('Please enter
                                  a whole number between 1 and 10 &gt;&gt;&gt;
                                  '))
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  print('Thank you. You entered',guess)
                                </strong>
                              </p>
                              <p>
                                Of course, it won't stop your user entering in a
                                decimal. For that, you'd have to add some
                                additional validation. There are a number of
                                ways of doing this. One of them uses our old
                                friend try - except.
                              </p>
                              <p style="margin-left: 30px">
                                <strong>while True:</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; print('Please enter a whole
                                  number between 1 and 10 &gt;&gt;&gt; ')
                                </strong>
                                <br />
                                <strong>&nbsp; &nbsp; try:</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; guess =
                                  int(input())
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; except ValueError:
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; continue
                                  <br />
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; if 1 &lt;= guess &lt;= 10:
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; print('Thank you.
                                  You entered: ',guess)
                                </strong>
                                <br />
                                <strong>&nbsp; &nbsp; else:</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; print('Out of
                                  range. Try again')
                                </strong>
                              </p>
                              <p>
                                Try running this code with a range of inputs,
                                including numbers that are out of range,
                                decimals and ones that include letters or
                                symbols. If you are having trouble working out
                                how this code works, use a visualiser. Copy the
                                code into e.g.
                                <a
                                  href="http://www.pythontutor.com"
                                  target="_blank"
                                >
                                  www.pythontutor.com
                                </a>
                                &nbsp;and then run it one line at a time. You
                                might be able to improve on the above code with
                                a little bit of experimentation!
                              </p>
                              <p>
                                You could do some research to see how else you
                                might solve the problem of only accepting whole
                                numbers. For example, if you read in a string,
                                could you run a test on the input, to check that
                                it only contains digits?
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

export default Validation_and_verification_using_while_loops_in_algorithms_and_programs;
