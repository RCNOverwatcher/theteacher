import React from "react";

function Implementing_our_algorithm_in_Python_to_generate_data() {
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
                                Implementing our algorithm in Python to generate
                                data
                              </h1>

                              <p>
                                We are going to use Python to implement the
                                algorithm we wrote:&nbsp;
                              </p>
                              <p style="margin-top: 10px; margin-left: 30px">
                                <strong>
                                  Import a random number generator.
                                </strong>
                                <br />
                                <strong>
                                  Create an empty list, one with no elements
                                  (pieces of data) in it.
                                </strong>
                                <br />
                                <strong>
                                  Ask the user how many elements they want in
                                  their list
                                </strong>
                                <br />
                                <strong>For each position in the list:</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; generate a random number
                                  and add it on the end of the existing list
                                </strong>
                              </p>
                              <p style="margin-bottom: 10px; margin-left: 30px">
                                <strong>for each position in the list:</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; print out what is in that
                                  position
                                </strong>
                              </p>
                              <p style="margin-bottom: 10px">
                                <strong>Q1.</strong> Type this code in and get
                                it working:
                              </p>
                              <p style="margin-bottom: 10px">
                                <strong>
                                  <img
                                    src="images/b3aa1cf2-2581-4156-bad9-fdbdaf8fcf93python1.JPG"
                                    alt="python1"
                                  />
                                </strong>
                              </p>
                              <p style="margin-bottom: 10px">
                                <strong>Q2.</strong> Generate lists of size 7,
                                10, 20, 50 and 1000.
                                <br />
                                <strong>Q3.</strong>&nbsp;Repeat Q2 but change
                                the code so you only generate numbers between 1
                                and 10
                                <span style="text-decoration: underline">
                                  <em>
                                    <strong>inclusive</strong>
                                  </em>
                                </span>
                                . Check your results
                                <strong>
                                  <em>
                                    <span style="text-decoration: underline">
                                      very carefully
                                    </span>
                                  </em>
                                </strong>
                                and make sure that your code does generate
                                <span style="text-decoration: underline">
                                  <em>
                                    <strong>all</strong>{" "}
                                  </em>
                                </span>
                                the numbers required and it doesn't generate
                                numbers outside this range!
                              </p>
                              <p style="margin-bottom: 10px">
                                The for loop in the lines:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  for i in range(size): # for i= 0 to (size-1)
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp;
                                  myArray.append(random.randint(1,500)) # get a
                                  random number and append it
                                </strong>
                              </p>
                              <p style="margin-bottom: 10px">
                                is very common in Python so we should make sure
                                we understand it. Firstly,
                                <strong>range(size)</strong> generates numbers
                                starting at 0 and up to but not including
                                whatever '<strong>size</strong>' is. For
                                example,&nbsp;
                              </p>
                              <p style="margin-bottom: 10px; margin-left: 30px">
                                <strong>
                                  range(5) generates 0, 1, 2, 3 and 4
                                </strong>
                                <br />
                                <strong>
                                  <span style="line-height: 1.5">
                                    range(7) generates 0, 1, 2, 3, 4, 5, 6
                                  </span>
                                </strong>
                              </p>
                              <p style="margin-bottom: 10px">
                                <span style="line-height: 1.5">
                                  For loops are used to repeat code. We want to
                                  repeat this line:
                                </span>
                              </p>
                              <p style="margin-bottom: 10px; margin-left: 30px">
                                <strong>
                                  <span style="line-height: 1.5">
                                    myArray.append(random.randint(1,500))
                                  </span>
                                </strong>
                              </p>
                              <p style="margin-bottom: 10px">
                                <span style="line-height: 1.5">
                                  '<strong>size</strong>' number of times.
                                </span>
                              </p>
                              <p style="margin-bottom: 10px">
                                <span style="line-height: 1.5">
                                  If size is 6, we want to repeat&nbsp;
                                  <strong>
                                    <span style="line-height: 1.5">
                                      myArray.append(random.randint(1,500))
                                    </span>
                                  </strong>
                                  <span style="line-height: 1.5">
                                    six times. We count each time we do the
                                    code, but starting at 0.
                                  </span>
                                  <span style="line-height: 1.5"> </span>
                                </span>
                              </p>
                              <p style="margin-bottom: 10px; margin-left: 30px">
                                <span style="line-height: 1.5">
                                  <strong>
                                    <span style="line-height: 1.5">
                                      So the first time we do the code, i = 0.
                                      We then do the code.
                                      <br />
                                      Then we loop back, i = 1, and we do the
                                      code again.
                                      <br />
                                      <strong>
                                        <span style="line-height: 1.5">
                                          Then we loop back, i = 2, and we do
                                          the code again.
                                        </span>
                                      </strong>
                                      <br />
                                      <strong>
                                        <span style="line-height: 1.5">
                                          Then we loop back, i = 3, and we do
                                          the code again.
                                        </span>
                                      </strong>
                                      <br />
                                      <strong>
                                        <span style="line-height: 1.5">
                                          Then we loop back, i = 4, and we do
                                          the code again.
                                        </span>
                                      </strong>
                                      <br />
                                      <strong>
                                        <span style="line-height: 1.5">
                                          Then we loop back, i = 5, and we do
                                          the code again and finish.
                                        </span>
                                      </strong>
                                      <br />
                                    </span>
                                  </strong>
                                </span>
                              </p>
                              <p style="margin-bottom: 10px">
                                <span style="line-height: 1.5">
                                  <span style="line-height: 1.5">
                                    <span style="line-height: 1.5">
                                      We have done the code six times, but we
                                      just started counting at 0 instead of 1. P
                                    </span>
                                  </span>
                                </span>
                                <span style="line-height: 1.5">
                                  <span style="line-height: 1.5">
                                    <span style="line-height: 1.5">
                                      rogrammers always like to count from 0,
                                      for some very good reasons, which we won't
                                      docuss at the moment. You don't have to
                                      use the variable&nbsp;<strong>i</strong>{" "}
                                      as the variable counter,&nbsp;by the way.
                                      You could have used <strong>g</strong>, of
                                      <strong>fish</strong>, or
                                      <strong>parrots</strong>, or
                                      <strong>counter</strong> or almost
                                      anything! Just remember that it always
                                      changes each time we do the loop, and that
                                      it starts at 0. we can make use of this
                                      variable in our code.&nbsp;
                                    </span>
                                  </span>
                                </span>
                              </p>
                              <p style="margin-bottom: 10px">
                                <span style="line-height: 1.5">
                                  <span style="line-height: 1.5">
                                    <span style="line-height: 1.5">
                                      <strong>Q4.</strong> Explain how
                                      <strong>i</strong> is used in these lines:
                                    </span>
                                  </span>
                                </span>
                                &nbsp;
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  for i in range(size): # for i= 0 to (size-1)
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; print(myArray[i],end=' ')
                                  # print what you find at that position
                                </strong>
                                &nbsp;
                              </p>
                              <p style="margin-bottom: 10px">
                                <span style="line-height: 1.5">
                                  <span style="line-height: 1.5">
                                    <span style="line-height: 1.5">
                                      So a <strong>for loop</strong> lets us do
                                      the same code lots of times, but we only
                                      have to write one line of code to do
                                      it.&nbsp;
                                    </span>
                                  </span>
                                </span>
                                &nbsp;
                              </p>
                              <p>&nbsp;</p>
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

export default Implementing_our_algorithm_in_Python_to_generate_data;
