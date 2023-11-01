import React from "react";

function Systems_analysis_documentation() {
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
                                Systems analysis documentation
                              </h1>
                              <p>
                                <strong>
                                  What documentation should be produced and when
                                  for a typical project?&nbsp;
                                </strong>
                                <br />
                                The key stages of any project following a
                                traditional waterfall model are shown below.
                              </p>
                              <p>
                                <img
                                  style="vertical-align: middle"
                                  src="images/a70b3962-9abc-4ad6-9f39-f74ae8cb6a2esys1.gif"
                                  alt="waterfall model"
                                />
                              </p>
                              <p>
                                <span style="line-height: 16.3636360168457px">
                                  You can never define exactly what
                                  documentation should be produced at every
                                  stage of a project life cycle as it will
                                  differ from project to project.&nbsp;
                                </span>
                                However, there are key pieces of documentation
                                that appear again and again in every project.
                                Note that there are unlikely to be any key
                                documents produced in the implementation and
                                installation stages, and that some waterfall
                                models show the last stage as 'Documentation'.
                                Since this section is about documentation, we
                                have changed the 'Maintenance' stage to talk
                                more generally about the user and technical
                                documentation guides.
                              </p>
                              <table style="width: 80%" border="1">
                                <tbody>
                                  <tr style="background-color: #f6f041">
                                    <td style="width: 20%; text-align: center">
                                      <strong>Stage</strong>
                                    </td>
                                    <td style="width: 25%; text-align: center">
                                      <strong>Documentation</strong>
                                    </td>
                                    <td style="width: 65%; text-align: center">
                                      <strong>Description</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">
                                      <strong>Feasibility study</strong>
                                    </td>
                                    <td align="left" valign="top">
                                      Feasibility report
                                    </td>
                                    <td>
                                      This is the key document for this stage.
                                      It will typically describe in general
                                      terms two or three potential options for
                                      solving the problem area. It will describe
                                      the implications for each solution, time
                                      scales, cost-benefits, total costs, any
                                      legal, employment, social, training, moral
                                      or ethical issues. This document is given
                                      to the customer to help them decide how to
                                      proceed.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">
                                      <strong>Systems analysis</strong>
                                    </td>
                                    <td align="left" valign="top">
                                      Requirements specification
                                      <br />
                                      <br />
                                      but also possibly the following:
                                      <br />
                                      <br />
                                      &nbsp; &nbsp;Written descriptions
                                      <br />
                                      &nbsp; &nbsp;Dataflow diagrams
                                      <br />
                                      &nbsp; &nbsp;Systems flowcharts
                                      <br />
                                      &nbsp; &nbsp;Jackson diagrams
                                      <br />
                                      &nbsp; &nbsp;Data dictionaries
                                      <br />
                                      &nbsp; &nbsp;Current hardware
                                      <br />
                                      &nbsp; &nbsp;Current software
                                      <br />
                                      &nbsp; &nbsp;Training needs
                                      <br />
                                      <br />
                                    </td>
                                    <td align="left" valign="top">
                                      The key document in this section is the
                                      Requirements Specification. This clearly
                                      and unambiguously spells out what the
                                      solution must be able to do and how
                                      success of each item in the Requirements
                                      Specification will be measured at the end
                                      of the project, to judge whether it has
                                      been met or not.
                                      <p>
                                        A lot of information is gathered when
                                        doing the Systems Analysis, especially
                                        if you are investigating an existing
                                        system. You will be doing interviews,
                                        collecting documents, observing people
                                        and so on. To help make sense of this
                                        vast collection of facts and opinions,
                                        lots of documents may be produced to
                                        help you work towards producing the
                                        Requirements Specification.
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">
                                      <strong>Design</strong>
                                    </td>
                                    <td align="left" valign="top">
                                      Written descriptions
                                      <br />
                                      Dataflow diagrams
                                      <br />
                                      Systems flowcharts
                                      <br />
                                      Jackson diagrams
                                      <br />
                                      Data dictionaries
                                      <br />
                                      Hardware requirements
                                      <br />
                                      Software requirements
                                      <br />
                                      Designs of the user interface
                                      <br />
                                      Navigation system design
                                      <br />
                                      Reports design
                                      <br />
                                      Validation and verification
                                      <br />
                                      System overview
                                      <br />
                                      Program overview
                                      <br />
                                      Algorithms
                                      <br />
                                      Data volume calculations
                                      <br />
                                      Data structures to be used Test plans
                                    </td>
                                    <td align="left" valign="top">
                                      In the design section, you will
                                      unambiguously describe the solution you
                                      are going to implement. This means that
                                      you will probably start by describing in
                                      written English what you are proposing but
                                      then use dataflow diagrams and systems
                                      flowcharts to describe exactly how
                                      information will move around your
                                      solution. You will draw out an overview of
                                      all the different screens a user will use
                                      and the navigation between them as well as
                                      draw up designs for queries and reports
                                      and any other output. You will describe
                                      programs using Jackson Structured Program,
                                      flowcharts and pseudo-code. You will
                                      describe the data that is going to be
                                      used, including validation rules and
                                      verification procedures and you will fully
                                      describe the structures you will use and
                                      how they will be accessed. You will
                                      describe any file systems and input /
                                      output access. You will also need to
                                      calculate the volumes of data your
                                      solution can expect. Flowcharts and
                                      pseudo-code will be used to describe
                                      algorithms and specific functions and you
                                      will need to describe what libraries you
                                      intend to use and where they will come
                                      from. It is also in this stage that you
                                      should draw up complete test plans at
                                      least for black box testing for testing
                                      the Requirements Specification and the
                                      user and acceptance test procedures you
                                      will use and the data that will be used.
                                      You may also include some other test
                                      procedures and data, for example, white
                                      box testing, alpha and beta testing. Care
                                      should be taken to state the test, the
                                      data that will be used, why that data was
                                      selected and the expected result, ready
                                      for the test to be carried out.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">
                                      <strong>Testing</strong>
                                    </td>
                                    <td align="left" valign="top">
                                      Results of test plans
                                    </td>
                                    <td align="left" valign="top">
                                      The results of all test should be kept
                                      here. They may used to inform necessary
                                      changes. They may need to be referred to
                                      if there is a problem later on. They may
                                      need to be redone if maintenance in the
                                      future is carried out. The customer may
                                      want to see them, to prove the system is
                                      working.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">
                                      <strong>Documentation</strong>
                                    </td>
                                    <td align="left" valign="top">
                                      User documentation
                                      <br />
                                      Technical documentation
                                    </td>
                                    <td align="left" valign="top">
                                      The user documentation is a guide for
                                      actual users of the system. It should be
                                      as free from jargon as possible and
                                      written in plain English suitable for the
                                      target audience. It may be a written
                                      document in booklet or pdf form, an
                                      on-screen interactive guide or an Internet
                                      web site. It gives the user everything
                                      they need to use the system. The user
                                      documentation may include a contents page
                                      and search facility, the hardware and
                                      software needed to run the software, a
                                      getting started guide, licence
                                      information, other legal information,
                                      how-to descriptions including screendumps,
                                      walk-through guides and videos, how to get
                                      further help, email and phone contact
                                      information, how to report errors
                                      information, jargon explanations and any
                                      other relevant information.
                                      <p>
                                        The Technical guide is written for
                                        technical experts, who may have to
                                        modify the system in the future when you
                                        are no longer there. It should include
                                        all of the technical documentation
                                        produced in the design stage as well as
                                        the test plans and the results of tests
                                        carried out. It should also include
                                        complete annotated program listings with
                                        full documentation.
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p>
                                <span style="line-height: 1.5">&nbsp;</span>
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

export default Systems_analysis_documentation;
