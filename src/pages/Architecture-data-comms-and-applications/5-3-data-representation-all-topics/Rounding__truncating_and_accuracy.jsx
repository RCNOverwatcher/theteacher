import React from "react";

function Rounding__truncating_and_accuracy() {
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
                                Rounding, truncating and accuracy
                              </h1>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Introduction
                                  </span>
                                </strong>
                                <br />
                                Rounding a number up or down has the result of
                                giving it a value that is similar to the
                                original number but making it shorter.
                                Truncation is where you remove some of the least
                                significant digits to the right of the decimal
                                place.
                              </p>

                              <p class="NormalContent">
                                <strong>
                                  Rounding numbers
                                  <br />
                                </strong>
                                This involves looking at the last digit that you
                                want to keep and rounding it up or keeping it as
                                it is, depending on the numbers after it. For
                                example:
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  <em>
                                    a) 34.561 rounded to 1 decimal place, the 5
                                    is the last digit. We would round this up to
                                    34.6 because 61 is closer to 99 than 0.
                                  </em>
                                </strong>
                                <br />
                                <strong>
                                  <em>
                                    b) 45.23454 rounded to 2 decimal places, the
                                    3 is the last digit. We would round this to
                                    45.23 as it is because 454 is closer to 0
                                    than 999.
                                  </em>
                                </strong>
                                <br />
                                <strong>
                                  <em>
                                    c) 32.2347621 rounded to 3 decimal places,
                                    the 4 is the last digit. We would round this
                                    up to 32.335 because 7621 is closer to 9999
                                    than 0.
                                  </em>
                                </strong>
                                <br />
                                <strong>
                                  <em>
                                    d) 412.650 to 1 decimal place, the 6 is the
                                    last digit. We would round this up to 412.7
                                    because 50 is closer to 99.
                                  </em>
                                </strong>
                                <br />
                                <strong>
                                  <em>
                                    e) -20.4549 to 2 decimal places, 5 is the
                                    last digit. We would round this down to
                                    -20.45 because 49 is closer to 0 than 99.
                                  </em>
                                </strong>
                              </p>
                              <p class="NormalContent">
                                When you round a number, you are creating an
                                approximation of the original number. You are
                                introducing and error and getting a less
                                accurate number. But you are getting a smaller,
                                easier to handle number in return. Note that
                                when you have to round a number that is exactly
                                half way through a range, there are a number of
                                different conventions you could use. In example
                                d) and e) above, we used 49 gets rounded down,
                                50 gets rounded up. Other conventions exist e.g.
                                rounding to an even digit. For example, rounding
                                46.4150000 to decimal places would give 46.42
                                (because the 1 was odd so had to be rounded up)
                                whereas&nbsp;
                                <span style="line-height: 16.3636360168457px">
                                  46.4250000 would give 46.42 (because 2 is an
                                  even number).
                                </span>
                              </p>
                              <p class="NormalContent">
                                <strong>Truncating numbers</strong>
                                <br />
                                If you wanted to truncate these numbers to 4
                                decimal places:
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  <em>23.954637456</em>
                                </strong>
                                <br />
                                <strong>
                                  <em>4.896797</em>
                                </strong>
                                <br />
                                <strong>
                                  <em>-37.677777777777r</em>
                                </strong>
                              </p>
                              <p class="NormalContent">you would get:</p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  <em>23.9546</em>
                                </strong>
                                <br />
                                <strong>
                                  <em>4.8967</em>
                                </strong>
                                <br />
                                <strong>
                                  <em>-37.6777</em>
                                </strong>
                              </p>
                              <p class="NormalContent">
                                <strong>Accuracy</strong>
                                <br />
                                Truncation is the same as always rounding down.
                                You can cause a much greater error than with
                                rounding. For example, if you truncated this
                                number to 4 decimal places:
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <em>
                                  <strong> 4.896797</strong>
                                </em>
                              </p>
                              <p class="NormalContent">
                                you would get 4.8967 and this is 0.000097 away
                                from the original number.
                              </p>
                              <p class="NormalContent">
                                But if you rounded it to 4 decimal places, you
                                would get:
                              </p>
                              <p class="NormalContent">
                                4.8968 and this is only 0.000003 away from the
                                original number, which is a much smaller error
                                than 0.000097.
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

export default Rounding__truncating_and_accuracy;
