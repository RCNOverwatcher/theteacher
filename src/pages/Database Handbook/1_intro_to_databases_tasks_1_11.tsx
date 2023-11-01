import React from "react";

function intro_to_databases_tasks_1_11() {
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
                              <p>&nbsp;</p>
                              <h1 style="text-align: center">
                                <span style="line-height: 1.3em">
                                  Section 1 - Tasks 1 - 11
                                </span>
                              </h1>
                              <p>
                                <strong>TASK 1</strong> &nbsp;Define a flat
                                file.
                                <br />
                                <strong>TASK 2</strong>
                                &nbsp;Outline what a company needs to consider
                                when thinking of going from a paper-based
                                database to an IT-based one.
                                <br />
                                <strong>TASK 3</strong>
                                &nbsp;When might it be appropriate to use a flat
                                file database design rather than a relational
                                one?
                                <br />
                                <strong>TASK 4</strong> &nbsp;What is meant by
                                ‘data redundancy’?
                                <br />
                                <strong>TASK 5</strong>
                                What is meant by the term ‘amendment anomaly’?
                                <br />
                                <strong>TASK 6</strong>
                                &nbsp;Describe this relationship fully:
                              </p>

                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/1a9b6e81-a233-444a-869f-fab880ea8b7atask6.JPG"
                                  alt="task6"
                                />
                              </p>
                              <p style="margin-left: 30px">
                                <em>Each degree is studied by …</em>
                              </p>
                              <p>
                                <strong>TASK 7</strong> &nbsp;What is the
                                difference between a foreign key and a primary
                                key?
                              </p>
                              <p style="margin-left: 30px">
                                <em>
                                  A foreign key is an attribute used to link two
                                  tables together. A foreign key in one table is
                                  actually a primary key in another table.
                                  Actual values of foreign keys might be
                                  duplicated in a table. A primary key is …
                                </em>
                              </p>
                              <p>
                                <strong>TASK 8</strong> &nbsp;Summarise how the
                                design of a relational database improves a flat
                                file design.
                              </p>
                              <p>
                                <strong>TASK 9</strong> The manager of a shop
                                keeps records of her customers, what they bought
                                and who the sales person was for each purchase.
                                She uses a flat file to store these records.
                                Some of the records in the flat file are shown
                                below.
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/aa431675-d34b-4808-ac07-eca72ac1479ctask9.JPG"
                                  alt="task9"
                                />
                              </p>
                              <p>
                                Suggest some of the problems that have occurred
                                as a result of storing the records in this kind
                                of structure.
                              </p>
                              <p style="margin-left: 30px">
                                <em>
                                  When you look at a problem like this, you need
                                  to consider the problems that have been
                                  highlighted in the NoKats example we looked at
                                  in detail earlier in this section. Ask
                                  yourself if any of the data in the records in
                                  the above table have been stored more than
                                  once. If you can find examples of this then
                                  you have found examples of ‘data redundancy’.
                                  Also ask yourself if data that is supposed to
                                  be the same, has been entered into the flat
                                  file identically in all places. If you can
                                  find examples where data is supposed to be the
                                  same, but has not been entered into the flat
                                  file identically then you will have found
                                  examples of adding anomalies. You will have
                                  found examples where the data has become
                                  inconsistent.
                                </em>
                              </p>
                              <p>
                                <strong>TASK 10</strong> &nbsp;A bookshop keeps
                                records of purchases of books. Suggest some of
                                the problems that have occurred as a result of
                                storing the records in a flat file.
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/9e941d2f-dd05-4c8b-b51d-5389e6aa32c9task10.JPG"
                                  alt="task10"
                                />
                                <br />
                                <strong>TASK 11</strong> As part of an incentive
                                scheme, the manager of a DIY warehouse keeps a
                                record of what each of her sales staff sells.
                                Suggest some of the problems that she may have
                                when searching the data to see who has sold the
                                most of any particular product between two given
                                dates.&nbsp;
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/62a02961-d2a6-4f36-bf45-eecd15c6e071task11.JPG"
                                  alt="task11"
                                />
                              </p>
                              <p>&nbsp;</p>
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

export default intro_to_databases_tasks_1_11;