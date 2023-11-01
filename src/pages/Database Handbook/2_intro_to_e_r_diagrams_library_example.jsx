import React from "react";

function intro_to_e_r_diagrams_library_example() {
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
                                A library database example
                              </h1>
                              <p>
                                <strong>
                                  Introduction
                                  <br />
                                </strong>
                                Now you know how to interpret E-R diagrams, you
                                can practice putting them together from the
                                start. You would begin by investigating whatever
                                system you have been asked to design a database
                                for. You could do this (amongst other methods)
                                by:
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>Interviewing people individually.</li>
                                    <li>Carrying out group interviews.</li>
                                    <li>Collecting example documents.</li>
                                    <li>Observing people using the system.</li>
                                    <li>Producing questionnaires.</li>
                                    <li>
                                      Sending out questions by email, fax or
                                      post.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                The next step would be to write down how the
                                system works.
                              </p>
                              <p>
                                <strong>A library database example</strong>
                                <br />A library contains books! Pupils take out
                                up to six books from the library. There may be
                                more than one copy of a particular book. Books
                                are usually written by only one author but
                                sometimes they are written jointly, by more than
                                one author.
                              </p>
                              <p>
                                This is a typical description of part of a
                                library database. The entities in this
                                particular system, the ‘objects’ about which we
                                will keep details might be identified in a first
                                attempt as BOOK, COPY_OF_BOOK, PUPIL and AUTHOR.
                                We know that:
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      Each pupil can take out many different
                                      copies of books.
                                    </li>
                                    <li>
                                      Each copy of each book can only be taken
                                      out by one pupil at a time.
                                    </li>
                                    <li>Each book may have many copies.</li>
                                    <li>
                                      Each copy of each book can only be about
                                      one particular book.
                                    </li>
                                    <li>
                                      Each book can be written by many authors.
                                    </li>
                                    <li>Each author can write many books.</li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                Drawing a first attempt for the E-R diagram
                                gives us
                              </p>
                              <p style="text-align: center">
                                <img
                                  src="images/267bc43e-9fbc-4302-ae37-c53e7797d62fer17.JPG"
                                  alt="er17"
                                />
                              </p>
                              <p>
                                <strong>TASK 6</strong> &nbsp;Add helping words
                                and phrases to the above E-R diagram to aid
                                understanding.
                              </p>
                              <p>
                                <strong>TASK 7</strong>&nbsp; Now redraw the E-R
                                diagram, resolving the many-to-many
                                relationship.
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

export default intro_to_e_r_diagrams_library_example;
