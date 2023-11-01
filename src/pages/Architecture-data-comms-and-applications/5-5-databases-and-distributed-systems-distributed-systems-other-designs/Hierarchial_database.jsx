import React from "react";

function Hierarchial_database() {
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
                                Hierarchial databases
                              </h1>
                              <p>
                                <strong>Hierarchial databases</strong>
                                <br />
                                Records held in a flat file are held in a
                                sequential order. In other words, the records
                                come one after another. In a relational
                                database, the records are also ordered
                                sequentially within each table. A hierarchical
                                database organises records differently, using a
                                tree structure. Each record has attached to it a
                                number of pointers. These pointers link one
                                record to the record above and below it in the
                                tree. As you go to a lower level in the tree,
                                you can retrieve ever more detailed information.
                              </p>

                              <p>
                                Here is part of a diagram of a hierarchical
                                database as an example:
                                <br class="NormalContentHeading" />
                              </p>
                              <p align="center">
                                <img
                                  src="images/c169c04a-8351-4d29-9436-0980cf61c27fa.gif"
                                  alt="hier"
                                />
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

export default Hierarchial_database;