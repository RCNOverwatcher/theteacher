import React from "react";

function How_files_are_organised() {
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
                                How files are organised
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                Files used in data processing and tables used in
                                databases are essentially the same thing. They
                                both hold records about something which you need
                                to keep information about. A record is simply a
                                collection of pieces of information called
                                'attributes'. There are lots of different
                                technical words and phrases (also known as
                                'jargon') we should know and we should also be
                                aware of the synonyms (different words for the
                                same thing, like 'pupil' and 'student').
                              </p>

                              <p>
                                <strong>Entities and attributes</strong>
                                <br />
                                An ‘entity’ is the term used to describe
                                something we keep information about. Attributes
                                are the pieces of information we keep about an
                                entity. For example, we might have a pupil
                                database. The entity here is 'Pupil' because
                                that is what we keep information about. The
                                attributes are the pieces of information about a
                                pupil, such as their first name, surname, date
                                of birth, form group and so on. In a library,
                                you might keep information about books. 'Book'
                                would be the entity and name of book, author,
                                ISBN number and so on would be the attributes.
                              </p>
                              <p>
                                <strong>Tables</strong>
                                <br />
                                Once we have identified an entity, and we know
                                what attributes we want to keep about each
                                entity, we can then store the actual pieces of
                                information about each entity. We can think of a
                                database that holds entities and attributes as a
                                table. Consider this example. It holds records
                                about dogs.
                              </p>
                              <p>
                                <img
                                  src="images/b41a1fb7-81c5-456b-a0e9-a0aaf0bc3a3fTable.GIF"
                                  alt="Table"
                                />
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      All of the details about one actual dog is
                                      called a 'record'.
                                    </li>
                                    <li>
                                      The records correspond to a row in a
                                      table.
                                    </li>
                                    <li>
                                      All the pieces of information about the
                                      dogs, the 'attributes', are held in the
                                      columns of the table.
                                    </li>
                                    <li>
                                      Another name for an attribute is a
                                      'field'.
                                    </li>
                                    <li>
                                      The headings in a column tell you what the
                                      attribute is in that column. They are the
                                      'field names' and usually make up the
                                      first row in a table.
                                    </li>
                                    <li>
                                      The individual pieces of information, the
                                      actual pieces of data, are called 'data
                                      items'.
                                    </li>
                                    <li>
                                      All of the records together, all of the
                                      rows, form a 'table'.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong>Files and databases</strong>
                                <br />
                                Another name for a table of records is a 'file'.
                                A database can be defined as one or more files.
                                You can have a simple database, with all the
                                information held in just one table.You could
                                also have a bigger database, where all of the
                                entities have been logically split up into
                                different tables. For example, a school database
                                might have one table for students, another for
                                staff, another for all the information about
                                different qualifications, a table for records
                                about each room and the facilities in each room
                                and so on.
                              </p>
                              <p>
                                <strong>Primary key (key field)</strong>
                                <br />
                                There is one field that we haven't mentioned
                                yet, known as the 'primary key' or 'key field'.
                                This is a special field. It is always different
                                for every record in the database. It is always
                                unique. The problem is that we might have two
                                dogs called 'Bongo' in the database, or two dogs
                                born on the same day, or two dogs owned by the
                                same owner. We need a way of making sure that we
                                can always refer to one individual record. In
                                your school's database, there might be two
                                students with the same name but their primary
                                key (their student identity number) will always
                                be different. When you pass your driving test,
                                you are given a unique driving licence number.
                                When you visit hospital, you will be given a
                                unique patient number. You will have a unique
                                National Insurance number one day, a unique tax
                                number and so on.
                              </p>
                              <p>
                                The usual way to make sure every record always
                                has one field that is unique is to ensure that
                                each record has an identity number of some
                                description. That's why we have a field called
                                ID in our dogs table.
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

export default How_files_are_organised;