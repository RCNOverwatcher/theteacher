import React from "react";

function Precedence_in_Maths_and_Boolean_operators() {
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
                                Precedence in Maths and Boolean operators
                              </h1>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Introduction
                                  </span>
                                </strong>
                                <br />
                                Precedence refers to the order in which you
                                carry out the parts of a calculation. 3 + 4 * 2
                                = 11, not 14 because you always do
                                multiplication before addition. Note that
                                multiplication and division are the same, just
                                as subtraction is the same as addition because
                                it is just adding a negative number
                              </p>

                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Maths operators
                                  </span>
                                </strong>
                                <br />
                                You may be familiar from Maths that&nbsp;the
                                order in which you do a calculation depends on
                                the following rules:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      Do multiplication and division first.
                                    </li>
                                    <li class="NormalContent">
                                      Then do addition and subtraction.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                This is why 3 + 4 * 2 = 11 not 14. You do have
                                the option, however, of changing the order the
                                calculations are done, by using brackets.
                                Brackets have a higher order of precedence than
                                multiplication / division and addition /
                                subtraction.
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      Do whatever is in brackets first.
                                    </li>
                                    <li class="NormalContent">
                                      Then do multiplication and division first.
                                    </li>
                                    <li class="NormalContent">
                                      Then do addition and subtraction.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                So (3 + 4) * 2 = 14 not 11, because you do what
                                is on brackets first.
                              </p>
                              <p class="NormalContent">
                                2 + 4 * 4 - 1 = 17, because you do the 4 * 4
                                first, to get 16, then add 2 and subtract 1.
                              </p>
                              <p class="NormalContent">
                                (2 + 4) * 4 - 1 = 23 because you do the 2 + 4
                                first, to get 6. You then multiply 6 by 4 to get
                                24. Finally, you subtract 1 to get 23.
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Boolean operators
                                  </span>
                                </strong>
                                <br />
                                If you have a Boolean expression that uses a
                                number of operators, the order of precedence is
                                as follows:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">Do NOT first.</li>
                                    <li class="NormalContent">Then do AND.</li>
                                    <li class="NormalContent">Then do OR.</li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                Again, brackets can be used to ensure parts of
                                expressions are done first as they have a higher
                                precedence.
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      Do whatever is in brackets first.
                                    </li>
                                    <li class="NormalContent">
                                      Then do NOT next.
                                    </li>
                                    <li class="NormalContent">Then do AND.</li>
                                    <li class="NormalContent">Then do OR.</li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                For example, if you had to search through a
                                database of books:
                              </p>
                              <p class="NormalContent" align="center">
                                <strong>
                                  WHERE Subject = "Maths" OR Subject = "Physics"
                                  AND Cost &lt; £15.00
                                </strong>
                              </p>
                              <p class="NormalContent">
                                you would find the Physics books costing less
                                than £15.00 first, and then get those books OR
                                Maths books in the database (because AND is done
                                before OR). You could change the meaning of the
                                expression though:
                              </p>
                              <p class="NormalContent" align="center">
                                <strong>
                                  WHERE (Subject = "Maths" OR Subject =
                                  "Physics") AND Cost &lt; £15.00
                                </strong>
                              </p>
                              <p class="NormalContent" align="left">
                                This would get all the Maths or Physics books
                                first and then get those books which were under
                                £15.00.
                              </p>
                              <p class="NormalContent" align="left">
                                It is always a good idea to use brackets in
                                programming, whether or not they are needed.
                                They often help make your program more readable
                                and easier to follow.
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

export default Precedence_in_Maths_and_Boolean_operators;
