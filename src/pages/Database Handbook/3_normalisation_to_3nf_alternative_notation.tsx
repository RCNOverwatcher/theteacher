import React from "react";

function normalisation_to_3nf_alternative_notation() {
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
                                An alternative notation
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                It is quite common in textbooks to see tables
                                laid out not in a table form but using some
                                ‘notation’. For example, the Member table in the
                                ‘DVD Now’ example at the beginning of this
                                section had a Primary Key called MemID, and then
                                the attributes Surname, Add1, Add2, Phone and
                                Join.
                              </p>
                              <p>
                                <strong>Using the alternative notation</strong>
                                <br />
                                This would be represented using this notation
                                as:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  MEMBER (
                                  <span style="text-decoration: underline">
                                    MemID
                                  </span>
                                  , Surname, Add1, Add2, Phone, Join)
                                </strong>
                              </p>
                              <p>
                                Also in the ‘DVD Now’ example, we had these
                                tables:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  MEMBER_DVD (
                                  <span style="text-decoration: underline">
                                    MemID
                                  </span>
                                  ,
                                  <span style="text-decoration: underline">
                                    DVD-ID
                                  </span>
                                  , Due)
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  DVD (
                                  <span style="text-decoration: underline">
                                    DVD-ID
                                  </span>
                                  , DVDName, Cert*)
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  CERTIFICATE (
                                  <span style="text-decoration: underline">
                                    Cert
                                  </span>
                                  , CertDes)
                                </strong>
                              </p>
                              <p>
                                Note the following things with this notation.
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li>
                                      The table name is in capital letters.
                                    </li>
                                    <li>
                                      The primary key is underlined. If a table
                                      has a compound primary key (one that is
                                      made up of more than one attribute) then
                                      all the attributes used to make up that
                                      key are underlined (as in the MEMBER_DVD
                                      table).
                                    </li>
                                    <li>
                                      The attributes in each table are listed
                                      after the primary key.
                                    </li>
                                    <li>
                                      If an attribute is a foreign key (used to
                                      link two tables together) then it has a
                                      star put next to it in the table where it
                                      is a foreign key. An example of this can
                                      be seen in the DVD table where Cert has a
                                      star next to it. In that table, it is a
                                      foreign key. In the CERTIFICATE table,
                                      however, Cert is a primary key.
                                    </li>
                                  </ol>
                                </li>
                              </ol>
                              <p>
                                Some students find this notation easy to work
                                with after a little practice. Others find it
                                easier to work with the Analysis Table because
                                it presents a visual representation of the table
                                design. Whichever method you prefer, it is
                                straightforward converting from one method to
                                the other.
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  <strong>Summary</strong>
                                  <br />
                                </span>
                                We now have worked through many examples of
                                normalisation. We know that it is a methodical
                                process.
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      We have to set up the Analysis Table.
                                    </li>
                                    <li>
                                      To go from UNF to 1NF, we put repeating
                                      attributes into their own groups.
                                    </li>
                                    <li>
                                      To go from 1NF to 2NF, we put non-key
                                      attributes that depend upon only part of
                                      compound primary keys into their own
                                      groups.
                                    </li>
                                    <li>
                                      To go from 2NF to 3NF, we put non-key
                                      attributes that depend upon other non-key
                                      attributes into their own groups.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                We know that the most difficult stage is usually
                                going from 1NF to 2NF. We know that we can have
                                tables that are made up only of a compound
                                primary key. We know that there is an
                                alternative way of carrying out the
                                normalisation process. This involves using a
                                notation. We know that we must be able to use
                                this notation as well as Analysis Tables.
                              </p>
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

export default normalisation_to_3nf_alternative_notation;