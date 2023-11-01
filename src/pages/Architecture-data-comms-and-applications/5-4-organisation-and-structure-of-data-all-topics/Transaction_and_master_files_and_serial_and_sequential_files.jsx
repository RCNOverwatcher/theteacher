import React from "react";

function Transaction_and_master_files_and_serial_and_sequential_files() {
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
                              <h1
                                class="ContentHeading"
                                style="text-align: center"
                                align="center"
                              >
                                Transaction and master files and serial and
                                sequential files
                              </h1>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Introduction
                                  </span>
                                </strong>
                                <span class="NormalContent">
                                  <br />
                                  Data is stored in files on storage devices,
                                  for example, on floppy disks, hard drives and
                                  magnetic tape. There is a choice of storage
                                  devices and there is also a choice in the way
                                  that files are organised on the storage
                                  device. Files can be organised so that a piece
                                  of data in the file can be accessed{" "}
                                  <strong>directly</strong>, without going
                                  through other pieces of data to get to it.
                                  This is a fast method of data access. Files
                                  could also be organised so that they are
                                  accessed
                                  <strong>serially</strong> or
                                  <strong>sequentially</strong>. This means that
                                  to find a file, you start at the beginning of
                                  the file and go through all the records in
                                  turn until you get to the one you want. This
                                  is a slow method of data access but has other
                                  benefits. When deciding what file organisation
                                  to use and what storage device to use, the key
                                  questions to ask are:
                                </span>
                              </p>

                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      How quickly do I need to get back a
                                      particular piece of data?
                                    </li>
                                    <li class="NormalContent">
                                      What do I want to do with the data?
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/99e50c6d-b9a2-48c2-8f80-efed74c3063ea.gif"
                                  alt="four ways"
                                />
                                <br />
                                &nbsp;
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Serial files
                                </strong>
                                <br />
                                Data stored in a serial file is stored in
                                <strong>time order</strong> only. When a new
                                piece of data is added to the file, it is simply
                                added on to the end of the file. If you had a
                                serial file with 10000 items in it, they would
                                be in the order that they were received on the
                                storage device. This makes getting back any
                                individual piece of data a rather slow process.
                                The only way you can retrieve a particular
                                record in a serial file is to:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>Check the file is not empty.</li>
                                    <li>
                                      If it is empty, report 'Empty' and stop.
                                    </li>
                                    <li>
                                      If it is not empty, start at the first
                                      record in the file
                                    </li>
                                    <li>Check if it is the record you want.</li>
                                    <li>
                                      If it is, report 'Record found' and stop.
                                    </li>
                                    <li>
                                      If it is not, get the next record and
                                      repeat, until you either find the record
                                      you want or you get to the end of the
                                      file.
                                    </li>
                                    <li>
                                      If you get to the end of the file, report
                                      'File not found'.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                Data access with serial files is slow and is
                                therefore not suitable for applications that
                                require fast access to data. You wouldn't want
                                to use this system of organisation, for example,
                                for a driving licence database used to deal with
                                customer enquiries. If a driver rang up DVLC
                                (the driving licence centre) and wanted to query
                                their details, it would take a very long time to
                                search serially the whole database! Some
                                applications, however, don't require fast access
                                to data. Here are some examples.
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Back-ups
                                </strong>
                                <br />
                                Most networks back-up the users' data onto
                                magnetic tape during the night. The data will
                                generally not be needed although occasionally a
                                user will need to get back a copy of a file that
                                they have accidentally deleted and very
                                occasionally the whole network will need to be
                                recovered after a system crash.
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  A shop
                                </strong>
                                <br />A shopkeeper might keep a record of each
                                transaction made in the shop in time order (a
                                serial file) over a 24-hour period. This file
                                will hold details of each sale; what was sold
                                and how many of each item. This file (also known
                                as a ‘transaction file’) can then be used at the
                                end of the 24-hour period to update the ‘master
                                file’ of products. The master file is a record
                                of the products and what is in stock. It doesn't
                                change except when it is updated using the
                                transaction file. Once updated, the stock
                                control system can then be used to automatically
                                re-order items.
                              </p>
                              <p class="NormalContent">
                                It is also worth noting that updating the master
                                file using the transaction file is done using
                                batch processing. In batch processing systems,
                                all the data is collected together in one place
                                (in the transaction file) before being
                                processed. Once a transaction file has been used
                                to update the master file, the transaction file
                                can be cleared out. It will then be ready for a
                                new transaction period. Master files are
                                permanent. Transaction files exist only for the
                                transaction period, and then they are cleared.
                                It is also worth noting here that while a serial
                                file can be used for this application, a more
                                efficient way to process the transaction file
                                would be to re-organise it into a sequential
                                file first. This is discussed in the sequential
                                file section later in this section.
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  An Automatic Teller Machine (ATM)
                                </strong>
                                <br />
                                An ATM machine keeps a serial file of all the
                                transactions made at the machine during a period
                                of time, perhaps the last 24 hours - it keeps a
                                'transaction file'. Every time a user withdraws
                                money, orders a new chequebook and so on, it is
                                recorded in time-order. In the small hours of
                                the night, however, the ATM will link to the
                                bank's main computer and will batch process the
                                transaction file to update the master file -
                                everyone's bank details gets updated in one go.
                                In addition, if there is a query from a customer
                                about a transaction, then the serial file can be
                                referred to for details of the transaction.{" "}
                                <br />
                                <br />
                                <strong class="NormalContentHeading">
                                  A payroll system
                                </strong>
                                <br />
                                When a company's employees 'clock-on' or ‘clock
                                off’, a record of this event is stored in a
                                serial file set up for this purpose. The entry
                                in the file will record the employee number and
                                the time and date they clocked on or off. At the
                                end of the week this serial file (take note that
                                it is also known as a 'transaction file') is
                                sorted into a sequential file - sorting the
                                serial file into a sequential file would collect
                                together each employee's entries, which are
                                scattered throughout the serial file, and put
                                them together and into the order that the
                                employee records are stored on the master file,
                                probably by employee number. The sequential file
                                is then batch processed with the master file
                                (the master file contains an up-to-date record
                                of each employee, what their hourly rate is and
                                a running total of their pay and deductions for
                                the current tax year). The processing in this
                                example means that the number of hours each
                                employee has worked in total for the last week
                                is calculated. The pay due is then worked out
                                and the deductions (tax, NI, pension
                                contributions and so on) made. Pay slips are
                                printed out. The serial file is then cleared,
                                ready for the next period of record collection.
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/8398a713-3851-4d46-ac7a-a3f15de9b089b.gif"
                                  alt="master file update"
                                />
                                <br />
                                &nbsp;
                              </p>
                              <div>
                                <p class="QuestionStyle">
                                  <strong
                                    class="NormalContentHeading"
                                    style="line-height: 1.5"
                                  >
                                    Sequential files
                                    <br />
                                  </strong>
                                  <span style="line-height: 1.5">
                                    Serial files are organised by time. There
                                    are situations where this may not be the
                                    best way to organise data. Consider the
                                    above example involving a shopkeeper. Over a
                                    24 hour period, the same products will be
                                    bought many times yet the details of each
                                    transaction involving the same product will
                                    be scattered throughout the serial file.
                                    When the serial file is processed, it will
                                    clearly need to return time after time to
                                    one product's details in the master file
                                    every time it comes across a transaction for
                                    that product. Having to constantly re-visit
                                    master file entries isn't very efficient! It
                                    would be better if the serial file, before
                                    the master file was updated, were processed
                                    to put all of the transactions for each of
                                    the products together. Not only that,
                                    however, it would be useful if the records
                                    were in the same order as the records in the
                                    master file. Then a product could be
                                    accessed once on the master file and all of
                                    the transactions that have taken place
                                    involving that product could be processed in
                                    one go. And since the sequential file and
                                    the master file records are in the same
                                    order, the records will be processed
                                    together in the most efficient way. You
                                    won’t get a record from the master file and
                                    then have to hunt through the sequential
                                    file.
                                  </span>
                                </p>
                              </div>
                              <p class="NormalContent">
                                A file that is in some kind of order other than
                                time order is known as a sequential file. In the
                                above example, the master file might be a file
                                of product details held in product ID order. We
                                should therefore create a sequential file
                                organised by product ID by processing the serial
                                file, ensuring that all the product transactions
                                for each product are together. We would then
                                batch process the sequential file to update the
                                master file.
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  What media can be used for serial and
                                  sequential files?
                                </strong>
                                <br />
                                Both serial and sequential files are accessed by
                                going to the beginning of the file, reading the
                                first piece of data, then going to the next, and
                                then the next and so on until the end of the
                                file. Serial and sequential files can be stored
                                on magnetic tape as well as media such as floppy
                                disks, CD R/W and hard disks.
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

export default Transaction_and_master_files_and_serial_and_sequential_files;
