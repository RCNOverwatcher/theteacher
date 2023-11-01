import React from "react";

function Common_operations_on_numeric_and_Boolean_data() {
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
                                Common operations on numeric and Boolean data
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                We often have to perform common operations on
                                both numeric and Boolean data. Over time and
                                with experience, this becomes easier. The more
                                actual examples we try out, the more we can
                                understand what is happening and how to do
                                something. The trick is to build up lots of
                                examples we can refer back to and build up
                                experience.
                              </p>

                              <p>
                                <strong>
                                  Common operations on numeric data
                                </strong>
                                <br />
                                We often have to add, subtract, multiply and
                                divide numbers in programming. This can be
                                easily achieved in our programs. Let us declare
                                two variables of data type Integer and one of
                                type Real:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>int firstnumber</strong>
                                <br />
                                <strong>int secondnumber</strong>
                                <br />
                                <strong> real result</strong>
                              </p>
                              <p>
                                We can add, subtract, multiply and divide
                                numbers in the following way:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  result = firstnumber + secondnumber
                                </strong>
                                <br />
                                <strong>
                                  result = firstnumber - secondnumber
                                </strong>
                                <br />
                                <strong>
                                  result = firstnumber * secondnumber
                                </strong>
                                <br />
                                <strong>
                                  result = firstnumber / secondnumber
                                </strong>
                              </p>
                              <p>
                                Result had to be declared as a Real number
                                because when we divide one number by another
                                number, there is a good chance that the result
                                will have a fractional part.
                              </p>
                              <p>
                                <strong>
                                  Common operations on Boolean data
                                </strong>
                                <br />
                                Boolean variables are really useful in
                                programming because they give you a way of doing
                                tests. Depending on the outcome of the test, you
                                can then do or not do some action. For example,
                                let us first declare a Boolean variable in
                                pseudo-code with an identifier 'wonthelottery'
                                like this:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>wonthelottery : Boolean</strong>
                              </p>
                              <p>
                                Once it has been declared, we can then set its
                                value to true or false, like this:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>wonthelottery = true or</strong>
                                <br />
                                <strong> wonthelottery = false</strong>
                              </p>
                              <p>
                                Now we can use the Boolean value to do a test:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>IF (wonthelottery = true) THEN</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp;PRINT "Congratulations"
                                </strong>
                                <br />
                                <strong> ELSE</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp;PRINT "Better luck next
                                  time"
                                </strong>
                                <br />
                                <strong> ENDIF</strong>
                              </p>
                              <p>
                                We look inside the brackets of (wonthelottery =
                                true) and ask ourselves if this is a true
                                statement. if it is, then we would print
                                'Congratulations'. If it is not true i.e. false,
                                then print 'Better luck next time'.
                              </p>
                              <p>
                                We can build up quite complex tests using
                                Boolean variables. Let's declare another
                                variable:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>wontheluckynumber : Boolean</strong>
                              </p>
                              <p>
                                We could now test to see if we have either one
                                the lottery or the lucky number draw by using
                                OR:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  IF (wonthelottery = true) OR
                                  (wontheluckynumber = true) THEN
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp;PRINT "Congratulations"
                                </strong>
                                <br />
                                <strong> ELSE</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp;PRINT "Better luck next
                                  time"
                                </strong>
                                <br />
                                <strong> ENDIF</strong>
                              </p>
                              <p>
                                As long as any one of the statements in brackets
                                are true (or both of them are true, then
                                'Congratulations' will be printed, else 'Better
                                luck next time' will be printed.
                              </p>
                              <p>Let's declare yet another variable:</p>
                              <p style="margin-left: 30px">
                                <strong>sixteenorover : Boolean</strong>
                              </p>
                              <p>
                                We can now use this to check whether the winner
                                is sixteen or over.
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  IF ((wonthelottery = true) OR
                                  (wontheluckynumber = true)) AND (sixteenorover
                                  = true) THEN
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp;PRINT "Congratulations"
                                </strong>
                                <br />
                                <strong> ELSE</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp;PRINT "Better luck next
                                  time"
                                </strong>
                                <br />
                                <strong> ENDIF</strong>
                              </p>
                              <p>
                                This time, you print 'Congratulations if either
                                wonthelottery OR wontheluckynumber is true, AND
                                the winner is sixteen or over. Notice the extra
                                brackets around ((wonthelottery = true) OR
                                (wontheluckynumber = true)). This makes sure
                                that the whole statement ((wonthelottery = true)
                                OR (wontheluckynumber = true)) is evaluated
                                first to be true or false, before ANDing it to
                                (sixteenorover = true)<strong>&nbsp;</strong>
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

export default Common_operations_on_numeric_and_Boolean_data;
