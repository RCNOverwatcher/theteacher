import React from "react";

function Another_example_of_selecting_test_data() {
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
                                Another example of selecting test data
                              </h1>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Introduction
                                  </span>
                                </strong>
                                <br />
                                Data used to test programs is not selected
                                randomly. Different categories of data are
                                selected to test the common situations found in
                                programs. Valid data is selected, to check a
                                program works. Invalid but perfectly feasible
                                invalid data is chosen, to check the program can
                                cope with invalid data. Many errors occur where
                                'borders' happen around data (see below for an
                                example of borderline data tests) so borderline
                                tests are carried out as well. In addition, you
                                will see tests dealing with extreme data of the
                                correct data type, and data of a completely
                                incorrect data type being tested.
                              </p>

                              <p class="NormalContent">
                                Typically, tables are drawn up in a test plan.
                                These use the following headings:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      Data to be used.
                                    </li>
                                    <li class="NormalContent">
                                      Why the data has been used.
                                    </li>
                                    <li class="NormalContent">
                                      What the predicted outcome is.
                                    </li>
                                    <li class="NormalContent">
                                      What the actual results were when the test
                                      was carried out.
                                    </li>
                                    <li class="NormalContent">
                                      Any comm
                                      <span class="NormalContent">
                                        ents (comparing the predicted with the
                                        actual results).
                                      </span>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                You can see an example of this below.
                              </p>
                              <p class="NormalContent">
                                <span class="NormalContent">
                                  An example of selecting data for white box
                                  testing
                                  <br />
                                  If you are testing the code as the programmer,
                                  you m
                                </span>
                                ay have to test:
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  <span class="NormalContentHeading">
                                    IF (Result &gt; 9) DO
                                    <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; XXXXXX
                                    <br />
                                    Else
                                    <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; YYYYYY
                                    <br />
                                    End IF
                                  </span>
                                </strong>
                              </p>
                              <p class="NormalContent">
                                <span style="line-height: 1.5">
                                  The programmer will want to test the routes
                                  through the program. They might select the
                                  following data:
                                </span>
                              </p>
                              <p class="NormalContent">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 (less than 9)
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8, 9 or 10
                                (borderline)
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp; 15 (greater than 9)
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  An example of black box testing
                                </strong>
                                <br />
                                When deciding what data to use during black box
                                testing, the programmer might consider the
                                following categories of input data:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">Valid data.</li>
                                    <li class="NormalContent">Invalid data.</li>
                                    <li class="NormalContent">Extreme data.</li>
                                    <li class="NormalContent">Mad data.</li>
                                    <li class="NormalContent">
                                      Borderline data - bugs lurk in corners!
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                Suppose a subroutine has been written.
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      The program asks the user to enter in a
                                      test mark between 0 and 100 as an integer.
                                    </li>
                                    <li class="NormalContent">
                                      It outputs a grade.
                                    </li>
                                    <li class="NormalContent">
                                      A student must re-sit the test if they get
                                      less than 50.
                                    </li>
                                    <li class="NormalContent">
                                      A pass is from 50 to 70 inclusive.
                                    </li>
                                    <li class="NormalContent">
                                      A pass with honours is from 71 to 100
                                      inclusive.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                You are a program tester.
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      You have been given the subroutine by the
                                      programmer to test.
                                    </li>
                                    <li class="NormalContent">
                                      You do not have knowledge of the actual
                                      code (the programmer wrote it, not you).
                                    </li>
                                    <li class="NormalContent">
                                      You do, however, know what it is supposed
                                      to do because you have been given its
                                      Requirements Specification.
                                    </li>
                                    <li class="NormalContent">
                                      You might draw up a black box test plan
                                      and produce the test results as shown in
                                      the Test Plan on the next page. (Note this
                                      test plan is not exhaustive – there are
                                      other tests you could add to the plan!)
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <table border="1" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td valign="top" width="115">
                                      <p class="NormalContent" align="center">
                                        <strong>Data to be used</strong>
                                      </p>
                                    </td>
                                    <td valign="top" width="163">
                                      <p class="NormalContent" align="center">
                                        <strong>
                                          Why this data has been selected
                                        </strong>
                                      </p>
                                    </td>
                                    <td valign="top" width="137">
                                      <p class="NormalContent" align="center">
                                        <strong>
                                          Prediction of what will be displayed
                                        </strong>
                                      </p>
                                    </td>
                                    <td valign="top" width="141">
                                      <p class="NormalContent" align="center">
                                        <strong>Actual results</strong>
                                      </p>
                                    </td>
                                    <td valign="top" width="139">
                                      <p class="NormalContent" align="center">
                                        <strong>Comment</strong>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td valign="top" width="115">
                                      <p class="NormalContent">30</p>
                                    </td>
                                    <td valign="top" width="163">
                                      <p class="NormalContent">Valid</p>
                                    </td>
                                    <td valign="top" width="137">
                                      <p class="NormalContent" align="center">
                                        “Re-sit”
                                      </p>
                                    </td>
                                    <td valign="top" width="141">
                                      <p class="NormalContent" align="center">
                                        “Re-sit”
                                      </p>
                                    </td>
                                    <td valign="top" width="139">
                                      <p class="NormalContent" align="center">
                                        Test passed
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td valign="top" width="115">
                                      <p class="NormalContent">60</p>
                                    </td>
                                    <td valign="top" width="163">
                                      <p class="NormalContent">Valid</p>
                                    </td>
                                    <td valign="top" width="137">
                                      <p class="NormalContent" align="center">
                                        “Pass”
                                      </p>
                                    </td>
                                    <td valign="top" width="141">
                                      <p class="NormalContent" align="center">
                                        “Pass”
                                      </p>
                                    </td>
                                    <td valign="top" width="139">
                                      <p class="NormalContent" align="center">
                                        Test passed
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td valign="top" width="115">
                                      <p class="NormalContent">85</p>
                                    </td>
                                    <td valign="top" width="163">
                                      <p class="NormalContent">Valid</p>
                                    </td>
                                    <td valign="top" width="137">
                                      <p class="NormalContent" align="center">
                                        “Honours”
                                      </p>
                                    </td>
                                    <td valign="top" width="141">
                                      <p class="NormalContent" align="center">
                                        “Honours”
                                      </p>
                                    </td>
                                    <td valign="top" width="139">
                                      <p class="NormalContent" align="center">
                                        Test passed
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td valign="top" width="115">
                                      <p class="NormalContent">-1</p>
                                    </td>
                                    <td valign="top" width="163">
                                      <p class="NormalContent">
                                        Invalid (Negative / borderline)
                                      </p>
                                    </td>
                                    <td valign="top" width="137">
                                      <p class="NormalContent" align="center">
                                        “Please re-enter data”
                                      </p>
                                    </td>
                                    <td valign="top" width="141">
                                      <p class="NormalContent" align="center">
                                        “Please re-enter data”
                                      </p>
                                    </td>
                                    <td valign="top" width="139">
                                      <p class="NormalContent" align="center">
                                        Test passed
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td valign="top" width="115">
                                      <p class="NormalContent">0</p>
                                    </td>
                                    <td valign="top" width="163">
                                      <p class="NormalContent">
                                        Valid (Borderline)
                                      </p>
                                    </td>
                                    <td valign="top" width="137">
                                      <p class="NormalContent" align="center">
                                        “Re-sit”
                                      </p>
                                    </td>
                                    <td valign="top" width="141">
                                      <p class="NormalContent" align="center">
                                        “Re-sit”
                                      </p>
                                    </td>
                                    <td valign="top" width="139">
                                      <p class="NormalContent" align="center">
                                        Test passed
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td valign="top" width="115">
                                      <p class="NormalContent">1</p>
                                    </td>
                                    <td valign="top" width="163">
                                      <p class="NormalContent">
                                        Valid (Borderline)
                                      </p>
                                    </td>
                                    <td valign="top" width="137">
                                      <p class="NormalContent" align="center">
                                        “Re-sit”
                                      </p>
                                    </td>
                                    <td valign="top" width="141">
                                      <p class="NormalContent" align="center">
                                        “Re-sit”
                                      </p>
                                    </td>
                                    <td valign="top" width="139">
                                      <p class="NormalContent" align="center">
                                        Test passed
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td valign="top" width="115">
                                      <p class="NormalContent">49</p>
                                    </td>
                                    <td valign="top" width="163">
                                      <p class="NormalContent">
                                        Valid (Borderline)
                                      </p>
                                    </td>
                                    <td valign="top" width="137">
                                      <p class="NormalContent" align="center">
                                        “Re-sit”
                                      </p>
                                    </td>
                                    <td valign="top" width="141">
                                      <p class="NormalContent" align="center">
                                        “Pass”
                                      </p>
                                    </td>
                                    <td valign="top" width="139">
                                      <p class="NormalContent" align="center">
                                        Test failed
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td valign="top" width="115">
                                      <p class="NormalContent">50</p>
                                    </td>
                                    <td valign="top" width="163">
                                      <p class="NormalContent">
                                        Valid (Borderline)
                                      </p>
                                    </td>
                                    <td valign="top" width="137">
                                      <p class="NormalContent" align="center">
                                        “Pass”
                                      </p>
                                    </td>
                                    <td valign="top" width="141">
                                      <p class="NormalContent" align="center">
                                        “Pass”
                                      </p>
                                    </td>
                                    <td valign="top" width="139">
                                      <p class="NormalContent" align="center">
                                        Test passed
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td valign="top" width="115">
                                      <p class="NormalContent">51</p>
                                    </td>
                                    <td valign="top" width="163">
                                      <p class="NormalContent">
                                        Valid (Borderline)
                                      </p>
                                    </td>
                                    <td valign="top" width="137">
                                      <p class="NormalContent" align="center">
                                        “Pass”
                                      </p>
                                    </td>
                                    <td valign="top" width="141">
                                      <p class="NormalContent" align="center">
                                        “Pass”
                                      </p>
                                    </td>
                                    <td valign="top" width="139">
                                      <p class="NormalContent" align="center">
                                        Test passed
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td valign="top" width="115">
                                      <p class="NormalContent">-345466</p>
                                    </td>
                                    <td valign="top" width="163">
                                      <p class="NormalContent">
                                        Invalid (Extreme)
                                      </p>
                                    </td>
                                    <td valign="top" width="137">
                                      <p class="NormalContent" align="center">
                                        “Please re-enter data”
                                      </p>
                                    </td>
                                    <td valign="top" width="141">
                                      <p class="NormalContent" align="center">
                                        “Please re-enter data”
                                      </p>
                                    </td>
                                    <td valign="top" width="139">
                                      <p class="NormalContent" align="center">
                                        Test passed
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td valign="top" width="115">
                                      <p class="NormalContent">87876</p>
                                    </td>
                                    <td valign="top" width="163">
                                      <p class="NormalContent">
                                        Invalid (Extreme)
                                      </p>
                                    </td>
                                    <td valign="top" width="137">
                                      <p class="NormalContent" align="center">
                                        “Please re-enter data”
                                      </p>
                                    </td>
                                    <td valign="top" width="141">
                                      <p class="NormalContent" align="center">
                                        “Please re-enter data”
                                      </p>
                                    </td>
                                    <td valign="top" width="139">
                                      <p class="NormalContent" align="center">
                                        Test passed
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td valign="top" width="115">
                                      <p class="NormalContent">4.5</p>
                                    </td>
                                    <td valign="top" width="163">
                                      <p class="NormalContent">
                                        Invalid (Non-integer)
                                      </p>
                                    </td>
                                    <td valign="top" width="137">
                                      <p class="NormalContent" align="center">
                                        “Please re-enter data”
                                      </p>
                                    </td>
                                    <td valign="top" width="141">
                                      <p class="NormalContent" align="center">
                                        “Please re-enter data”
                                      </p>
                                    </td>
                                    <td valign="top" width="139">
                                      <p class="NormalContent" align="center">
                                        Test passed
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td valign="top" width="115">
                                      <p class="NormalContent">-67.8</p>
                                    </td>
                                    <td valign="top" width="163">
                                      <p class="NormalContent">
                                        Invalid (Negative non-integer)
                                      </p>
                                    </td>
                                    <td valign="top" width="137">
                                      <p class="NormalContent" align="center">
                                        “Please re-enter data”
                                      </p>
                                    </td>
                                    <td valign="top" width="141">
                                      <p class="NormalContent" align="center">
                                        “Please re-enter data”
                                      </p>
                                    </td>
                                    <td valign="top" width="139">
                                      <p class="NormalContent" align="center">
                                        Test passed
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td valign="top" width="115">
                                      <p class="NormalContent">FG</p>
                                    </td>
                                    <td valign="top" width="163">
                                      <p class="NormalContent">Invalid (Mad)</p>
                                    </td>
                                    <td valign="top" width="137">
                                      <p class="NormalContent" align="center">
                                        “Please re-enter data”
                                      </p>
                                    </td>
                                    <td valign="top" width="141">
                                      <p class="NormalContent" align="center">
                                        “Please re-enter data”
                                      </p>
                                    </td>
                                    <td valign="top" width="139">
                                      <p class="NormalContent" align="center">
                                        Test passed
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td valign="top" width="115">
                                      <p class="NormalContent">???6F</p>
                                    </td>
                                    <td valign="top" width="163">
                                      <p class="NormalContent">Invalid (Mad)</p>
                                    </td>
                                    <td valign="top" width="137">
                                      <p class="NormalContent" align="center">
                                        “Please re-enter data”
                                      </p>
                                    </td>
                                    <td valign="top" width="141">
                                      <p class="NormalContent" align="center">
                                        “Please re-enter data”
                                      </p>
                                    </td>
                                    <td valign="top" width="139">
                                      <p class="NormalContent" align="center">
                                        Test passed
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p
                                class="NormalContent"
                                style="text-align: left"
                                align="center"
                              >
                                <strong>
                                  An example of a black box test plan and
                                  results.
                                </strong>
                              </p>
                              <p class="NormalContent">
                                When you completed the tests, you would pass the
                                results back to the programmer. They would need
                                to investigate why the test that used the data
                                49 failed - it did not produce the expected
                                outcome. They would then re-submit it to you for
                                re-testing.
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

export default Another_example_of_selecting_test_data;