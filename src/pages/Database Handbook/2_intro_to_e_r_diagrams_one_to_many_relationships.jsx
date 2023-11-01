import React from "react";

function intro_to_e_r_diagrams_one_to_many_relationships() {
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
                                One-to-many relationships
                              </h1>
                              <p style="text-align: center">
                                <img
                                  src="images/2f0529e0-1dd4-43f3-a9e5-a7a2168c6624er3.JPG"
                                  alt="er3"
                                />
                              </p>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                In this database, there are two tables. One is
                                called OWNER and the other is called PET. OWNER
                                and PET are ‘entities’. They are things about
                                which we keep information, or ‘attributes’. For
                                example, the attributes we might store in the
                                entity OWNER include ID, Surname, Contact phone
                                number, Gender and so on.
                              </p>
                              <p>
                                <strong>TASK 1</strong> &nbsp;Suggest five
                                attributes for the entity Pet.
                              </p>
                              <p style="margin-left: 30px">
                                <em>1. Pet_ID</em>
                              </p>
                              <p style="margin-left: 30px">
                                <em>2. Name</em>
                              </p>
                              <p style="margin-left: 30px">
                                <i>3. &nbsp;</i>
                              </p>
                              <p style="margin-left: 30px">
                                <i>4.</i>
                              </p>
                              <p style="margin-left: 30px">
                                <i>5.</i>
                              </p>
                              <p>
                                <strong>Reading E-R diagrams</strong>
                                <br />A relationship between 2 entities must be
                                read in two directions. In other words, to fully
                                describe the relationship between two entities,
                                you need two sentences, not one. The process of
                                reading E-R diagrams is very mechanical:
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li>Always begin with the word ‘Each’.</li>
                                    <li>Add the entity name.</li>
                                    <li>
                                      Add the verb or phrase closest to that
                                      entity.
                                    </li>
                                    <li>
                                      Follow the relationship line to the other
                                      entity.
                                    </li>
                                    <li>
                                      Write down whether it is a ‘one’ or a
                                      ‘many’. (If it has three prongs then it is
                                      the ‘many’ side of the relationship. If it
                                      has one prong then it is the ‘one’ side.)
                                    </li>
                                    <li>
                                      Finally, write down the name of the other
                                      Entity.
                                    </li>
                                  </ol>
                                </li>
                              </ol>
                              <p>
                                In the above example, the two sentences that
                                describe the relationship between OWNER and PET
                                are:
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>Each OWNER owns many PETs.</li>
                                    <li>Each PET is owned by one OWNER.</li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                The line used to show a one-to-many relationship
                                is this:
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/a69f0a73-329a-482a-83b0-cf7ddc6802cber4.JPG"
                                  alt="er4"
                                />
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  Note that the ‘crow’s foot’ is the many side
                                  of the relationship.
                                </span>
                              </p>
                              <p>
                                An E-R diagram is constructed in the following
                                way:
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li>Each entity is shown in a box.</li>
                                    <li>
                                      Entity names are always singular (PET not
                                      PETS, OWNER not OWNERS, for example).
                                    </li>
                                    <li>
                                      The correct type of relationship line is
                                      drawn, the right way round! The ‘crows
                                      foot’ is the many side.
                                    </li>
                                    <li>
                                      Verbs or phrases are added to aid
                                      understanding.
                                    </li>
                                  </ol>
                                </li>
                              </ol>
                              <p>
                                <strong>TASK 2</strong> &nbsp;Complete the
                                diagrams to show the following one-to-many
                                relationships.
                              </p>
                              <p>
                                a) A football team can have many players. A
                                player can play for only one team.
                                <br />
                                b) A Ward looks after many patients. A patient
                                can be resident in only one ward.
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/1c84247e-e409-481a-ad25-f03a8f215b51er5.JPG"
                                  alt="er5"
                                />
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  <strong>TASK 3</strong>&nbsp; Write down the
                                  two sentences that describe this one-to-many
                                  relationship:
                                </span>
                              </p>
                              <p style="text-align: center">
                                <span style="line-height: 1.5">
                                  <img
                                    src="images/43512be9-4288-492f-9fd0-a68584802bd2er6.JPG"
                                    alt="er6"
                                  />
                                </span>
                              </p>
                              <p>1) Each …</p>
                              <p>
                                <br />
                                2) Each …
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

export default intro_to_e_r_diagrams_one_to_many_relationships;
