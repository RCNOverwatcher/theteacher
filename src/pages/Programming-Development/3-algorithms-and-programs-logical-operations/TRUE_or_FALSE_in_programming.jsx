import React from "react";

function TRUE_or_FALSE_in_programming() {
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
                                TRUE or FALSE in programming
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                Boolean algebra is often used in programming.
                                You frequently have to test a value and if the
                                result is TRUE then you run one block of code
                                but if it's FALSE, you run a different block of
                                code. This is called 'selection' in programming.
                                We write some pseudo-code to represent using
                                this selection construction using the IF
                                statement.
                              </p>

                              <p style="margin-left: 30px">
                                <strong>
                                  IF &lt;the result of a test is TRUE&gt;&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp;do the code&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp;you find in this
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp;block and then exit
                                </strong>
                                <br />
                                <strong>ELSE</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp;do the code&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp;you find in this
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp;block and then exit
                                  <br />
                                  ENDIF
                                </strong>
                              </p>
                              <p>
                                Most programming languages have an IF keyword so
                                that you can use the selection construction. The
                                actual syntax (the way the construction is
                                written and the keyowrds you must use) differs
                                from language to language but the idea is the
                                same for all languages. The tests use maths
                                operators. These are typically &gt;, &gt;=,
                                &lt;, &lt;=, == and !=.
                              </p>
                              <p>
                                <strong>
                                  How do you test numbers in programming?
                                  <br />
                                </strong>
                                If we had to test to see if a test result held
                                in a variable called score is greater than the
                                pass mark, we might write this:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>IF (score &gt; 50)&nbsp;</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp;PRINT 'You have passed.
                                  Well done'
                                  <br />
                                </strong>
                                <strong>
                                  ELSE
                                  <br />
                                </strong>
                                <strong>
                                  &nbsp; &nbsp; &nbsp;PRINT 'You have failed and
                                  must have extra lessons after school'.
                                </strong>
                              </p>
                              <p>
                                Score &gt; 50 can have one of two outcomes. It
                                can be a TRUE statement or a FALSE statement.
                                Either your score is greater than 50 (TRUE) or
                                it's not (FALSE).
                              </p>
                              <p>
                                You compare actual values using maths operators:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>45 &gt; 23 (TRUE) greater than</strong>
                                <br />
                                <strong>34 &lt; 4 (FALSE) less than</strong>
                                <br />
                                <strong>
                                  12 &gt;= 12 (TRUE) greater than or equal to
                                </strong>
                                <br />
                                <strong>
                                  14 &lt;= 20 (TRUE) less than or equal to
                                </strong>
                                <br />
                                <strong>26 == 26 (TRUE) equal to</strong>
                                <br />
                                <strong>34 != 34 (FALSE) not equal to</strong>
                              </p>
                              <p>You can compare values held in variables:</p>
                              <p style="margin-left: 30px">
                                <strong>Score &gt; passmark</strong>
                                <br />
                                <strong>age &lt; legalAge</strong>
                                <br />
                                <strong>eggs &gt;= omelette</strong>
                                <br />
                                <strong>height &lt;= bar</strong>
                                <br />
                                <strong>speed == maximum</strong>
                                <br />
                                <strong>left != right</strong>
                              </p>
                              <p>
                                <strong>
                                  How do you test strings in programming?
                                </strong>
                                <br />
                                <span style="line-height: 1.5">
                                  All of the above are testing numbers but you
                                  can test words as well. Any mixture of
                                  letters, numbers and symbols in programming is
                                  known as a{" "}
                                </span>
                                <em style="line-height: 1.5">
                                  <strong>string</strong>
                                </em>
                                <span style="line-height: 1.5">
                                  . Just remember to put strings in quotes, to
                                  tell the computer you are testing strings.
                                  There is a big difference in programming
                                  between the number 5 and the symbol '5', for
                                  example, and this is often a cause of bugs in
                                  a program when you start out learning how to
                                  code. When comparing strings, your computer
                                  converts each letter into its ASCII code and
                                  compares those numbers! It's useful to have an
                                  ASCII table handy.
                                </span>
                              </p>
                              <p>You could test the following strings:</p>
                              <p style="margin-left: 30px">
                                <strong>
                                  "David" &gt; "John" (False, because the ASCII
                                  code of <em>D</em> is less than the ASCII code
                                  of
                                  <em>J</em>.)
                                </strong>
                                <br />
                                <strong>
                                  "Money" &lt; "Monster" (TRUE, because the
                                  first letters are the same, as are the second
                                  and third (so they have the same ASCII codes),
                                  but the ASCII code of <em>e</em> is less than
                                  the ASCII code of
                                  <em>s</em>.)
                                  <br />
                                  "sad" &lt; "Saddle" (FALSE, because <em>
                                    s
                                  </em>{" "}
                                  has an ASCII code 115 but the ASCII code of{" "}
                                  <em>S</em> is 83, and as 115 &lt; 83 is FALSE,
                                  the answer is FALSE.)
                                  <br />
                                  "sad" &lt; "saddle" (TRUE, because{" "}
                                  <em>sad</em> are the same, then you have no
                                  letter in the first word, which is nul, or
                                  ASCII code 0. <em>d</em> is ASCII code 100,
                                  and as 0 &lt; 100, the answer is TRUE.)
                                </strong>
                              </p>
                              <p>
                                <strong>Q1.</strong> For each of the following,
                                state whether the answer is TRUE or FALSE.&nbsp;
                              </p>
                              <p style="margin-left: 30px">
                                <strong>a.</strong> 10 &gt; 20
                                <br />
                                <strong>b.</strong>
                                20 &lt; 40
                                <br />
                                <strong>c.</strong> 10 &gt;=10
                                <br />
                                <strong>d.</strong>
                                5 &lt;= 9<br />
                                <strong>e.</strong> 34 == 31
                                <br />
                                <strong>f.</strong>
                                23 != 45
                                <br />
                                <strong>g.</strong> 17 &gt;= 50
                                <br />
                                <strong>h.</strong>
                                45 != 45
                              </p>
                              <p>
                                <strong>Q2.&nbsp;</strong>For each of the
                                following, state whether the answer is TRUE or
                                FALSE and explain how you arrived at your
                                answer.
                              </p>
                              <p style="margin-left: 30px">
                                <strong>a.</strong> "Jack" &gt; "Jill"
                                <br />
                                <strong>b.</strong>
                                "Kevin" &lt; "kevin"
                                <br />
                                <strong>c.</strong> "Door" &gt; "Doormouse"
                                <br />
                                <strong>d.</strong> "A work of art" &lt; "All is
                                not well".
                                <br />
                                <strong>e.</strong>
                                "Blue and green" &gt; "Blue and red"
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

export default TRUE_or_FALSE_in_programming;
