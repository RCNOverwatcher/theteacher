import React from "react";

function Introduction_to_E_R_diagrams() {
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
                                Introduction to E-R diagrams
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                There are two approaches that database designers
                                commonly use to come up with a design for a
                                relational database. They are used together,
                                even though at first you may think they are
                                completely different approaches that produce
                                different designs for the same system!!
                              </p>
                              <p>
                                E-R diagrams. The first approach is to produce
                                an E-R diagram of the proposed system. The
                                designer will ask themselves what obvious
                                ‘entities’ exist in a system and how are they
                                related. Entities are identifiable objects in a
                                database about which you would store
                                information. We have already seen lots of
                                examples of entities such as Member, Dog, Breed,
                                Undergraduate and Degree. Each of these entities
                                requires a table to store real-life examples of
                                that entity in (known as ‘records’). Each actual
                                record is stored in a row in the appropriate
                                table. Each record is made up of ‘fields’. A
                                field is a piece of information you keep about
                                an entity. In the Member’s table in the previous
                                section, fields included, Initial, Surname,
                                Title, Sex and Postcode, for example. Database
                                designers often also refer to the ‘attributes’
                                of a particular record rather than ‘fields’ but
                                they mean the same thing. Notice that fields are
                                the columns in tables. Once the designer has
                                come up with an E-R diagram of logically linked
                                entities, they can then go ahead and build the
                                database.
                              </p>
                              <p>
                                Normalisation. A second technique the database
                                designer can use is known as ‘normalisation’.
                                This has its roots in mathematical analysis and
                                can produce a very efficient design. It involves
                                identifying all of the possible attributes in a
                                database and then applying a set of rules to
                                them in turn. Each stage in the process of
                                normalisation can result in a ‘better’ design.
                              </p>
                              <p>
                                <strong>
                                  E-R diagrams and normalisation together
                                </strong>
                                <br />
                                Normalisation will produce database designs that
                                can be shown mathematically to be the ‘best’
                                design. By this, we mean a design that minimises
                                the amount of data redundancy. However, it may
                                not necessarily produce the best design in terms
                                of ease of understanding for humans! In
                                practice, the designer will use both techniques
                                together!
                              </p>
                              <p>
                                <strong>The first approach</strong>
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      The designer may well start a new design
                                      by producing an E-R diagram of the
                                      proposed system.
                                    </li>
                                    <li>
                                      They might then produce a Data Dictionary
                                      that details what attributes make up each
                                      entity.
                                    </li>
                                    <li>
                                      Finally, they might take each table in
                                      turn and ‘normalise’ it, to check that
                                      there are no data redundancy problems and
                                      that problems associated with adding and
                                      deleting records and amending data are
                                      removed. Normalisation in this case is
                                      used to validate the E-R diagram the
                                      designer has come up with.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong>The second approach</strong>
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      The designer may well start a new design
                                      by producing an E-R diagram of the
                                      proposed system.
                                    </li>
                                    <li>
                                      They might then produce a Data Dictionary
                                      that details what attributes make up each
                                      entity.
                                    </li>
                                    <li>
                                      They might then list all the attributes
                                      they have identified in the Data
                                      Dictionary and normalise them together.
                                      This will produce a set of related tables.
                                    </li>
                                    <li>
                                      They then compare the design of the
                                      database using the E-R diagram they
                                      produced with the design produced by
                                      normalising the attributes.
                                    </li>
                                    <li>
                                      They will decide which design they want to
                                      go with (if they are different). It may
                                      mean, for example, that they decide to go
                                      with the E-R diagram because it is an
                                      easier design to follow, or they may go
                                      for the normalised design because it is
                                      the best for eliminating data redundancy,
                                      or they may use a hybrid of both designs,
                                      based on the designer’s prior experience.
                                      Whichever design is chosen, however, it is
                                      up to the database designer to fully
                                      justify it!!
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                We will start looking at how relational
                                databases are designed by first looking at E-R
                                modelling. We will then look in considerable
                                detail at normalisation.
                              </p>
                              <p>
                                <strong>
                                  E-R diagrams and their use in designing
                                  relational databases
                                </strong>
                                <br />
                                An E-R diagram is a diagram that database
                                designers use to show the relationships between
                                groups of data (each group being known as an
                                ‘entity’). It gives the designer a very simple
                                yet effective overview of the entities in a
                                system and how they relate to each other.
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      It is a useful way of summarising what
                                      entities and therefore what tables are
                                      needed in a relational database.
                                    </li>
                                    <li>
                                      It is a concise way of representing the
                                      relationships between records in tables.
                                      This can then be used both as a reference
                                      for the designer when setting up foreign
                                      keys and as a means of identifying
                                      ‘many-to-many relationships’, which can
                                      then be ‘resolved’. (See later in this
                                      section for further details about
                                      many-to-many relationships and why you
                                      need to resolve them).
                                    </li>
                                    <li>
                                      It can be used as a check to normalisation
                                      and a discussion aid. The results of both
                                      methods could be used together in design
                                      meetings. The design team can then discuss
                                      these designs and argue out how to go
                                      forward.
                                    </li>
                                    <li>
                                      It should be produced because it is a
                                      record of the design of the database and
                                      needs to be part of the technical manual.
                                      In the future, some maintenance of the
                                      database may be necessary. The person
                                      doing it (who may not be the original
                                      designer) needs to know the overall design
                                      and will expect to find the E-R diagram in
                                      the technical manual!
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                We will now look at the building blocks of E-R
                                diagrams.
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

export default Introduction_to_E_R_diagrams;