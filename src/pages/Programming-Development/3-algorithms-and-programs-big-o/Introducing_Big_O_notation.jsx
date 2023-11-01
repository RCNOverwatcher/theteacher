import React from "react";

function Introducing_Big_O_notation() {
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
                                Introducing Big O notation
                              </h1>
                              <p>
                                <strong class="NormalContentHeading">
                                  Introduction
                                </strong>
                                <br />
                                Programmers write many algorithms. What they
                                always should do is to ask themselves how 'good'
                                an algorithm they have just written is. Big O
                                notation is used to describe the performance of
                                an algorithm and in particular, how it performs
                                as the amount of data given to it increases,
                                <span style="line-height: 16.3636360168457px">
                                  how well an algorithm scales.
                                </span>
                                &nbsp;For example, how would an algorithm
                                perform if it were given an array of 10 numbers
                                to work with compared to an array with 100000
                                numbers in? Big O always looks for the worst
                                case scenario. For example, if you had an
                                algorithm that did a serial search through an
                                array of 500 items, it would always assume that
                                you find the item on the 500<sup>th</sup>
                                search, or that the item didn't exist at all.
                              </p>

                              <p>
                                <strong>
                                  Performance is not the same as timing
                                </strong>
                                <br />
                                Although you can measure how
                                <strong>
                                  <em>fast</em>{" "}
                                </strong>
                                an algorithm goes using a program, it would be
                                dependent on the hardware. For example, if an
                                algorithm takes 0.0004 seconds to run on one
                                machine, will it run faster on a computer with a
                                faster processor? Timing an algorithm tells you
                                about the computer hardware rather than the
                                software. It is impossible to time an algorithm
                                for all configurations of computers but what we
                                can do is to evaluate the
                                <strong>
                                  <em>performance</em>{" "}
                                </strong>
                                of an algorithm, and we can do this using Big O
                                notation.
                              </p>
                              <p>
                                <strong>An example of Big O notation</strong>
                                <br />
                                Consider the following simplified equation as an
                                example:
                              </p>
                              <p>
                                56n<sup>3</sup> + 20n<sup>2</sup> + 17
                              </p>
                              <p>
                                Using Big O notation, we can define the part of
                                the equation that has the greatest effect on the
                                answer.&nbsp;
                              </p>
                              <p>
                                If n = 1, the answer is 93 and all parts of the
                                equation have an impact on the final answer.
                              </p>
                              <p>
                                If n = 2 (just one more value), then the answer
                                is 321. The 17 at the end of the equation is
                                actually not very significant. It doesn't really
                                have much impact on the final answer.
                              </p>
                              <p>
                                If n = 10, the answer is 58017 and the 17 really
                                is pretty insignificant now. Also, however, the
                                20n<sup>2</sup>
                                term is not that significant. It only
                                contributed 2000 to the final answer.
                              </p>
                              <p>
                                In fact, the term that has the most impact on
                                the final answer when n becomes large, is the
                                56n<sup>3</sup>
                                term. And even here, the term that has the most
                                impact for larger numbers isn't the 56 part of
                                the term but the n<sup>3</sup> term.
                              </p>
                              <p>
                                We therefore say that this equation has an order
                                of n cubed, and in Big O notation,
                              </p>
                              <p>
                                <strong>
                                  O(N<sup>3</sup>)
                                </strong>
                              </p>
                              <p>
                                This is the idea behind Big O notation. We are
                                using it to describe how well algorithms
                                perform.
                              </p>
                              <p class="QuestionStyle"></p>
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

export default Introducing_Big_O_notation;