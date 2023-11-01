import React from "react";

function Iterative_versus_recursive_approaches() {
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
                              <h1
                                class="ContentHeading"
                                style="text-align: center"
                                align="center"
                              >
                                Iterative versus recursive approaches
                              </h1>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Introduction
                                  </span>
                                </strong>
                                <br />A recursive routine is a routine that
                                calls itself. An iterative routine is one that
                                loops the same code a number of times, anything
                                from never actually doing the code to many
                                times, depending on the result of a condition or
                                by using a FOR loop. We saw some examples of
                                iteration in 3.2.2d. Any recursive function or
                                procedure can be rewritten as an iterative one.
                                There are some key differences between the
                                approaches.
                              </p>

                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Iterative versus recursion
                                  </span>
                                </strong>
                                <br />
                                An iterative routine to calculate a factorial
                                might be:
                              </p>
                              <p class="NormalContentHeading">
                                <strong>
                                  Function Factorial_Recurse(number){" "}
                                </strong>
                                <br />
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp; &nbsp; If (number&lt;=1)
                                  Output 1
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp; &nbsp; Output number *
                                  Factorial_Recurse (number - 1)
                                </strong>
                                <br />
                                <br />
                                <strong>End Function Factorial_Recurse</strong>
                              </p>
                              <p class="NormalContent">
                                The same function can be rewritten using
                                iteration:
                              </p>
                              <p class="NormalContentHeading">
                                <strong>Function Factorial_Iter(number)</strong>
                              </p>
                              <p class="NormalContentHeading">
                                <strong>&nbsp; &nbsp; &nbsp; Total = 1</strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; If (number
                                  &lt;= 1) Output Total
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;While (number
                                  &gt; 1)
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  Total = Total * number
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  number = number - 1
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; End While
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Output Total
                                </strong>
                                <br />
                                <br />
                                <strong> End Function Factorial_Iter</strong>
                              </p>
                              <p>
                                <strong>
                                  <span class="NormalContentHeading">
                                    Comparison of iterative versus recursion
                                  </span>
                                  <span class="NormalContent">
                                    <br />{" "}
                                  </span>
                                </strong>
                                <span class="NormalContent">
                                  Every time a call is made using recursion, the
                                  processor in the computer has to stop what
                                  it's doing and save all of the contents of
                                  special memory boxes in the CPU called
                                  'registers' before it can do the call. After a
                                  call has finished, it then has to go to the
                                  place it saved the registers (called the
                                  'stack') and put the values back in.
                                </span>
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li class="NormalContent">
                                      If a recursive routine keeps calling
                                      itself, then it has to keep pushing values
                                      onto the stack, and ultimately keep taking
                                      them off (or 'popping') values off the
                                      stack. The problem with this is that the
                                      stack is a fixed size, so too many calls
                                      and you will quickly fill up the stack and
                                      get a 'stack overflow' error. Also, it
                                      takes time to push and pop values on and
                                      off the stack. As long as there aren't too
                                      many recursive calls, then recursion is
                                      fast. Too many calls, and relative to
                                      iteration, the process becomes slow.
                                    </li>
                                    <li class="NormalContent">
                                      You can see from the two examples above
                                      that there are less instructions using
                                      recursion. Less instructions means a
                                      smaller program, smaller object code and a
                                      program that should in theory run faster.
                                    </li>
                                    <li class="NormalContent">
                                      Some people find recursion difficult to
                                      follow compared to iterative routines.
                                      With practice, however, and knowing how to
                                      trace a recursive routine, it does become
                                      fairly easy.
                                    </li>
                                  </ol>
                                </li>
                              </ol>
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

export default Iterative_versus_recursive_approaches;