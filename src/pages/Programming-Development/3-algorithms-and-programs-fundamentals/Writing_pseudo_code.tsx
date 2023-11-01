import React from "react";

function Writing_pseudo_code() {
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
                                Writing pseudo-code
                              </h1>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Pseudo-code
                                </strong>
                                <br />
                                Pseudo-code is a cross between English and the
                                keywords used in programming languages. It also
                                makes use of the programming constructs found in
                                programming languages (sequence, selection,
                                iteration) but it has no strict rules that you
                                have to follow. It is used to effectively
                                describe solutions in a near-programming
                                language type of way! This means that the
                                pseudo-code can then be given to a programmer
                                expert in
                                <strong>any</strong> language and they should be
                                able to quickly convert the pseudo-code into
                                that language. This is the big advantage of
                                pseudo-code. It is independent of any particular
                                programming language and can be quickly
                                converted into any language!
                              </p>

                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  An example of pseudo-code
                                </strong>
                                <br />
                                Suppose you need to write an algorithm to find a
                                record in a file. A first attempt at an
                                algorithm might look like this (Don’t worry if
                                you don’t understand the code. We are only at
                                the beginning of a long path)!
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              </p>
                              <p style="margin-left: 30px">
                                <strong>RecordFound=FALSE</strong>
                                <br />
                                <strong>EndOfFile=FALSE</strong>
                                <br />
                                <strong>
                                  READ Key field of record you want to find
                                </strong>
                                <br />
                                <strong> READ First record in file</strong>
                                <br />
                                <strong>
                                  WHILE ((EndOFFile=FALSE) AND
                                  (RecordFound=FALSE)) DO
                                </strong>
                                <br />
                                <strong> BEGIN</strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; COMPARE record
                                  you are looking for with record from file
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; IF same THEN
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  RecordFound=TRUE
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  PRINT "Record found"
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ELSE
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  IF EndOfFile Then
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  EndOfFile=TRUE
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  PRINT "End of file reached. Record not found."
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  ELSE
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  READ next record
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  ENDIF
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ENDIF
                                </strong>
                                <br />
                                <strong> END</strong>
                                <br />
                                <strong>ENDWHILE</strong>
                              </p>
                              <div>
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
    </div>
  );
}

export default Writing_pseudo_code;