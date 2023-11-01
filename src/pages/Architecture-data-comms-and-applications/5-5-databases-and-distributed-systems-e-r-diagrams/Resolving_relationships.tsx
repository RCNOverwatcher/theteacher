import React from "react";

function Resolving_relationships() {
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
                                Resolving many-to-many relationships
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                Taking a many-many relationship between two
                                tables, which we cannot use, and redesigning it
                                into a form we can use is known as 'resolving a
                                many-to-many relationship'. If you have a
                                many-to-many relationship, you can turn it into
                                two one-to-many relationships by creating an
                                extra linking table.
                              </p>
                              <p style="text-align: justify">
                                <img
                                  src="images/a0b0251f-5941-4783-b021-b41d33d7b498er10.JPG"
                                  alt="er10"
                                />
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  If the primary key of an entity A is attribute
                                  X and the primary key of entity B is attribute
                                  Y, then the primary key of the extra table is
                                  a ‘compound primary key’ made up of X and Y.
                                </span>
                              </p>
                              <p>Note:</p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      A <strong>simple</strong> primary key is a
                                      primary key that is made up of only one
                                      attribute.
                                    </li>
                                    <li>
                                      A <strong>compound</strong> primary key is
                                      a primary key that is made up of more than
                                      one attribute.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong>
                                  An example of ‘resolving a many-to-many
                                  relationship’
                                </strong>
                              </p>

                              <p>
                                <br />
                                Looking at some sample records for the
                                Pupil-GCSE many-to-many relationship problem, we
                                can see the following:
                              </p>
                              <p style="text-align: center">
                                <img
                                  src="images/421e00db-2541-4013-8e8d-151bd6d6aa65er11.JPG"
                                  alt="er11"
                                />
                                <br />
                                Reading the relationships, we have:
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      Each record in the Pupil table (i.e. each
                                      actual pupil) has many entries in the
                                      Pupil_GCSE table. Have a look at pupil
                                      number one. She has three entries in the
                                      Pupil_GCSE table because she does three
                                      GCSEs.
                                    </li>
                                    <li>
                                      Each record in the Pupil_GCSE table (each
                                      row) relates to only one record (one
                                      pupil) in the Pupil table. Look, for
                                      example, at the last record in the
                                      Pupil_GCSE table (Pup_ID = 2 and GCSE_ID =
                                      4). This record is related to only one
                                      record in the Pupil table. This particular
                                      record relates only to pupil number 2.
                                    </li>
                                    <li>
                                      Each GCSE appears in many different
                                      records (rows) in the Pupil_GCSE table.
                                      Look, for example, at the ICT GCSE. This
                                      GCSE appears twice in the Pupil_GCSE
                                      table. It appears in the second record and
                                      in the last one.
                                    </li>
                                    <li>
                                      Each record in the Pupil_GCSE table
                                      relates to just one GCSE. Look, for
                                      example, at the third record in the
                                      Pupil_GCSE table. (Pup_ID = 1 and GCSE_ID
                                      = 5). This record is related to only one
                                      record (one GCSE) in the GCSE table. It is
                                      related to GCSE number five, D&amp;T.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                We have resolved our many-to-many relationship.
                                We store each pupil’s details only once. This is
                                good! We store the details about each GCSE only
                                once. This is also good! We have a third table
                                that matches up each pupil to every GCSE they
                                are taking. This table has a compound primary
                                key made up of the primary key from the pupil
                                table and the primary key from the GCSE table.
                                Each compound primary key combination is unique!
                                (Each row is unique - you cannot have two rows
                                the same). At any time, we can recombine the
                                data from any related records from the three
                                tables into one record!
                              </p>
                              <p>
                                <strong>TASK 4</strong> &nbsp;A music CD can
                                contain many tracks. A track can appear on many
                                different CDs (for example, on a compilation CD,
                                a greatest hits CD etc).
                              </p>
                              <p>
                                a) Complete the drawing of the E-R diagram of
                                the many-to-many relationship. (Don’t forget the
                                helping words!)
                              </p>
                              <p style="text-align: left">
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/ec698f45-272c-4e5c-aae2-48f6f48c8758er19.JPG"
                                  alt="er19"
                                />
                              </p>
                              <p style="text-align: left">
                                b) Resolve the many-to-many relationship into
                                two one-to-many relationships. Draw the final
                                E-R diagram design. Clearly indicate a suitable
                                primary key for each of the entities.&nbsp;
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

export default Resolving_relationships;