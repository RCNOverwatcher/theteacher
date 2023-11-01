import React from "react";

function Merging_data_files() {
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
                                Merging data files
                              </h1>
                              <p>
                                <strong class="NormalContentHeading">
                                  Merging data
                                </strong>
                                <br />
                                Merging two files is the name given to taking
                                both files and creating one new file out of
                                them. For example, File one might contain: 1, 6,
                                9, 16 and 22, and file two might contain: 2, 5,
                                23, 33, 100. If you merge the files, you end up
                                with one file containing: 1, 2, 5, 6, 9, 16, 22,
                                23, 33, and 100. The programmer would write a
                                procedure to merge two files.&nbsp;One possible
                                merge pseudo-code, trying hard to use the
                                sequence, selection and iteration constructs, is
                                as follows:
                              </p>

                              <p style="margin-left: 30px">
                                <strong>READ first data in file A</strong>
                                <br />
                                <strong> READ first data in file B</strong>
                                <br />
                                <strong>
                                  WHILE not (end of file A) and not (end of file
                                  B)
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  IF A &lt; B
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  WRITE A to file C
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  IF not (end of file A)
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  READ next data in file A
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  ENDIF
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  ELSE
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  WRITE B to file C
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  IF not (end of file B)
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  READ next data in file B
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  ENDIF
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  ENDIF
                                </strong>
                                <br />
                                <strong> ENDWHILE</strong>
                                <br />
                                <strong>
                                  WRITE remaining records from file that is not
                                  empty to file C.
                                </strong>
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  An example of merge using the above
                                  pseudo-code
                                </strong>
                                <br />
                                See if you can follow the pseudo-code to do the
                                following merge. We have used a trace table to
                                help us. Two small colleges have just merged.
                                They currently each have a file that holds
                                details about the courses they offer. We require
                                a program that can merge these two files into
                                one file for the new ‘super college’. We will
                                use the Primary Key of each course in the
                                merging algorithm. Merge the following two
                                sorted files:
                              </p>
                              <p>
                                <strong>File A: 3, 7, 18, 80</strong>
                                <br />
                                <strong>
                                  File B: 1, 10, 19, 70, 100, 280, 500, 600, 800
                                </strong>
                              </p>
                              <table border="1" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td valign="top" width="102">
                                      <p align="center">
                                        <strong>
                                          <em>File A</em>
                                        </strong>
                                      </p>
                                    </td>
                                    <td valign="top" width="99">
                                      <p align="center">
                                        <strong>
                                          <em>
                                            File B&nbsp;&nbsp;&nbsp;&nbsp;
                                          </em>
                                        </strong>
                                      </p>
                                    </td>
                                    <td valign="top" width="290">
                                      <p align="center">
                                        <strong>
                                          <em>Merged file C</em>
                                        </strong>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td valign="top" width="102">
                                      <p align="center">3</p>
                                    </td>
                                    <td valign="top" width="99">
                                      <p align="center">1</p>
                                    </td>
                                    <td valign="top" width="290">
                                      <p>1</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td valign="top" width="102">
                                      <p align="center">3</p>
                                    </td>
                                    <td valign="top" width="99">
                                      <p align="center">10</p>
                                    </td>
                                    <td valign="top" width="290">
                                      <p>1, 3</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td valign="top" width="102">
                                      <p align="center">7</p>
                                    </td>
                                    <td valign="top" width="99">
                                      <p align="center">10</p>
                                    </td>
                                    <td valign="top" width="290">
                                      <p>1, 3, 7</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td valign="top" width="102">
                                      <p align="center">18</p>
                                    </td>
                                    <td valign="top" width="99">
                                      <p align="center">10</p>
                                    </td>
                                    <td valign="top" width="290">
                                      <p>1, 3, 7, 10</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td valign="top" width="102">
                                      <p align="center">18</p>
                                    </td>
                                    <td valign="top" width="99">
                                      <p align="center">19</p>
                                    </td>
                                    <td valign="top" width="290">
                                      <p>1, 3, 7, 10, 18</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td valign="top" width="102">
                                      <p align="center">80</p>
                                    </td>
                                    <td valign="top" width="99">
                                      <p align="center">19</p>
                                    </td>
                                    <td valign="top" width="290">
                                      <p>1, 3, 7, 10, 18, 19</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td valign="top" width="102">
                                      <p align="center">80</p>
                                    </td>
                                    <td valign="top" width="99">
                                      <p align="center">70</p>
                                    </td>
                                    <td valign="top" width="290">
                                      <p>1, 3, 7, 10, 18, 19, 70</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td valign="top" width="102">
                                      <p align="center">80</p>
                                    </td>
                                    <td valign="top" width="99">
                                      <p align="center">100</p>
                                    </td>
                                    <td valign="top" width="290">
                                      <p>1, 3, 7, 10, 18, 19, 70, 80</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td valign="top" width="102">
                                      <p align="center">-</p>
                                    </td>
                                    <td valign="top" width="99">
                                      <p align="center">100</p>
                                    </td>
                                    <td valign="top" width="290">
                                      <p>
                                        1, 3, 7, 10, 18, 19, 70, 80, 100, 280,
                                        500, 600, 800
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p class="QuestionStyle">
                                <strong>
                                  <em>
                                    <br />
                                  </em>
                                </strong>
                              </p>
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

export default Merging_data_files;
