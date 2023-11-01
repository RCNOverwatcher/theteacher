import React from "react";

function Network_database() {
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
                                Network databases
                              </h1>
                              <p>
                                <strong class="NormalContentHeading">
                                  Network databases
                                </strong>
                                <br />
                                These are similar to Hierarchical database.
                                However, data can be provided with many pointers
                                indeed, not just above and below a data item and
                                this can allow very fast accessing to data
                                because data can then be accessed up the tree
                                structure, down the structure but also along the
                                tree structure, too! A generic, diagrammatical
                                representation of a network database is as
                                follows:
                              </p>

                              <p align="center">
                                <img
                                  src="images/188ba0c0-b456-47d1-a2fe-fce8ec8e26b0b.gif"
                                  alt="cross-linked"
                                />
                              </p>
                              <div>
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
    </div>
  );
}

export default Network_database;
