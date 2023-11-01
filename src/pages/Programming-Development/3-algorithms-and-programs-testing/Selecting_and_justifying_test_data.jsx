import React from "react";

function Selecting_and_justifying_test_data() {
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
                                Selecting and justifying test data
                              </h1>
                              <p>
                                <strong>Introductio</strong>
                                <br />
                                We have seen that when you translate a program,
                                the translator looks for syntax errors. If it
                                finds any, then the error diagnostics tools try
                                to help by displaying appropriate error messages
                                and indicating, or attempting to indicate, where
                                the problem or problems are. We know, however,
                                that just because a program is successfully
                                translated into object code, there may still be
                                errors known as 'logical errors'. A logical
                                error is an error that gives an incorrect
                                answer. They can only be tracked down by
                                appropriate testing using a carefully thought
                                through test plan.
                              </p>

                              <p>
                                <strong>
                                  Types of testing that should be done.
                                </strong>
                                <br />
                                When a test plan is being thought about for some
                                code, we should consider testing some different
                                sorts of data. We should test:
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>some valid data</li>
                                    <li>some invalid data</li>
                                    <li>some borderline data</li>
                                    <li>some extreme data</li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong>An example of a test plan</strong>
                                <br />
                                Consider the following pseudo-code, which prints
                                out a message depending upon what exam mark you
                                got:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  IF (Result &gt;=0) AND (Result &lt; 100) THEN
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp;PRINT “Poor mark”
                                </strong>
                                <br />
                                <strong> ELSE</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp;IF (Result &lt; 200) THEN
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; PRINT
                                  “Could do better”
                                </strong>
                                <br />
                                <strong>&nbsp; &nbsp; &nbsp;ELSE</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; IF (Result
                                  &lt; 300) THEN
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp; &nbsp;PRINT “Good”
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ELSE
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp; &nbsp;PRINT “Well done”
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ENDIF
                                </strong>
                                <br />
                                <strong>&nbsp; &nbsp; &nbsp;ENDIF</strong>
                                <br />
                                <strong> ENDIF</strong>
                              </p>
                              <p>We should test:</p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      <strong>
                                        some valid data e.g. 50, 250
                                      </strong>
                                    </li>
                                    <li>
                                      <strong>
                                        {" "}
                                        some invalid data e.g. -30
                                      </strong>
                                    </li>
                                    <li>
                                      <strong>
                                        some borderline data e.g. 99, 100, 101
                                      </strong>
                                    </li>
                                    <li>
                                      <strong>
                                        {" "}
                                        some extreme data e.g. 30000
                                      </strong>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong>Producing a test plan</strong>
                                <br />
                                Once we have identified the sorts of tests we
                                should do, we should create a test plan. This is
                                usually done in a table using the following
                                headings:
                              </p>
                              <div align="center">
                                <table
                                  style="width: 628px"
                                  border="1"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        style="
                                      width: 21pt;
                                      background-color: #d9d9d9;
                                      padding: 0cm;
                                    "
                                        width="28"
                                      >
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              Test no
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td
                                        style="
                                      width: 53.25pt;
                                      background-color: #d9d9d9;
                                      padding: 0cm;
                                    "
                                        width="71"
                                      >
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              Type
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td
                                        style="
                                      width: 39pt;
                                      background-color: #d9d9d9;
                                      padding: 0cm;
                                    "
                                        width="52"
                                      >
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              Data to be used
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td
                                        style="
                                      width: 72pt;
                                      background-color: #d9d9d9;
                                      padding: 0cm;
                                    "
                                        width="96"
                                      >
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              Expected result
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td
                                        style="
                                      width: 63pt;
                                      background-color: #d9d9d9;
                                      padding: 0cm;
                                    "
                                        width="84"
                                      >
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              Actual result
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td
                                        style="
                                      width: 48.75pt;
                                      background-color: #d9d9d9;
                                      padding: 0cm;
                                    "
                                        width="65"
                                      >
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              Checked?
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td
                                        style="
                                      width: 162pt;
                                      background-color: #d9d9d9;
                                      padding: 0cm;
                                    "
                                        width="216"
                                      >
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              Comment
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="padding: 0cm">
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              1
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td style="padding: 0cm">
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              Valid
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td style="padding: 0cm">
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              50
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td style="padding: 0cm">
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              Poor mark
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td style="padding: 0cm">&nbsp;</td>
                                      <td style="padding: 0cm">&nbsp;</td>
                                      <td style="padding: 0cm">&nbsp;</td>
                                    </tr>
                                    <tr>
                                      <td style="padding: 0cm">
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              2
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td style="padding: 0cm">
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              Valid
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td style="padding: 0cm">
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              250
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td style="padding: 0cm">
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              Good
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td style="padding: 0cm">&nbsp;</td>
                                      <td style="padding: 0cm">&nbsp;</td>
                                      <td style="padding: 0cm">&nbsp;</td>
                                    </tr>
                                    <tr>
                                      <td style="padding: 0cm">
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              3
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td style="padding: 0cm">
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              Invalid
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td style="padding: 0cm">
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              -30
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td style="padding: 0cm">
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              ??
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td style="padding: 0cm">&nbsp;</td>
                                      <td style="padding: 0cm">&nbsp;</td>
                                      <td style="padding: 0cm">&nbsp;</td>
                                    </tr>
                                    <tr>
                                      <td style="padding: 0cm">
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              4
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td style="padding: 0cm">
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              Borderline
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td style="padding: 0cm">
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              99
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td style="padding: 0cm">
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              Poor mark
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td style="padding: 0cm">&nbsp;</td>
                                      <td style="padding: 0cm">&nbsp;</td>
                                      <td style="padding: 0cm">&nbsp;</td>
                                    </tr>
                                    <tr>
                                      <td style="padding: 0cm">
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              5
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td style="padding: 0cm">
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              Borderline
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td style="padding: 0cm">
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              100
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td style="padding: 0cm">
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              Could do better
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td style="padding: 0cm">&nbsp;</td>
                                      <td style="padding: 0cm">&nbsp;</td>
                                      <td style="padding: 0cm">&nbsp;</td>
                                    </tr>
                                    <tr>
                                      <td style="padding: 0cm">
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              6
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td style="padding: 0cm">
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              Borderline
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td style="padding: 0cm">
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              101
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td style="padding: 0cm">
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              Could do better
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td style="padding: 0cm">&nbsp;</td>
                                      <td style="padding: 0cm">&nbsp;</td>
                                      <td style="padding: 0cm">&nbsp;</td>
                                    </tr>
                                    <tr>
                                      <td style="padding: 0cm">
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              7
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td style="padding: 0cm">
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              Extreme
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td style="padding: 0cm">
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              30000
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td style="padding: 0cm">
                                        <p
                                          style="
                                        margin-bottom: 0.0001pt;
                                        text-align: center;
                                      "
                                          align="center"
                                        >
                                          <strong>
                                            <span
                                              style="
                                            font-size: 10pt;
                                            font-family: Arial, sans-serif;
                                          "
                                            >
                                              Well done ??
                                            </span>
                                          </strong>
                                        </p>
                                      </td>
                                      <td style="padding: 0cm">&nbsp;</td>
                                      <td style="padding: 0cm">&nbsp;</td>
                                      <td style="padding: 0cm">&nbsp;</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <p>
                                We can already see that by simply carefully
                                thinking about our test plan, we are identifying
                                problems already, and we haven't even done any
                                actual tests yet. It is clear, for example, that
                                our code doesn't take care of the possibility
                                that someone could enter a negative test result
                                accidentally. It also doesn't take care of the
                                problem of someone entering in an unreasonably
                                high mark such as 30000 (the test might be out
                                of 400, for example).
                              </p>
                              <p>
                                <strong>
                                  Checking actual results against expected
                                  results
                                </strong>
                                <br />
                                Once we have created the test plan, we then
                                carry it out and record the actual results. The
                                final and important part of the test plan is to
                                check the actual results against the predicted
                                results and make sure that written evidence of
                                this happening is recorded. It is often best to
                                simply tick off on the plan when each test
                                result has been checked, commenting on those
                                which need to be looked at in more detail.
                                <strong>&nbsp;</strong>
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

export default Selecting_and_justifying_test_data;
