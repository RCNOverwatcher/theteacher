import React from "react";

function Primitive_data_types_and_storage_requirements() {
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
                                Primitive data types and storage requirements
                              </h1>
                              <p>
                                <strong class="NormalContentHeading">
                                  Introduction
                                </strong>
                                <br />
                                When a computer stores data in a program or an
                                application such as a database, it needs to know
                                what type of data it is. This is because
                                different data types require different amounts
                                of storage space. Before we look at storing data
                                in both fixed-size records and variable-sized
                                records, we need to look in a little more detail
                                at the most common data types. Some data types
                                can be found in most programming languages. Some
                                data types may be found in applications such as
                                Access.
                              </p>

                              <p>
                                <strong class="NormalContentHeading">
                                  Integers
                                </strong>
                                <br />
                                An integer is a positive or negative whole
                                number. It has no fractional part. 5, -23 and
                                800 are examples of integers while 5.7, -23.98
                                and 4.0 are all real numbers because they have a
                                fractional part (even if the fractional part
                                equals zero).
                              </p>
                              <p>
                                We have already seen some methods of storing
                                integers. We have seen the pure binary method of
                                representing integers, the sign and magnitude
                                system and the two's complement system. Using
                                the pure binary method, for example, we can
                                represent whole positive numbers between 0 and
                                255 if we use one byte. That's because there are
                                256 unique combinations of 8 bits. (0000 0000,
                                0000 0001, 0000 0010, 0000 0011, up to 1111
                                1111). One byte per integer is of little use,
                                however, if you need to store numbers between 0
                                and 1000, for example. In this case, two bytes
                                would be needed. If we use two bytes, we can
                                represent integers between 0 and 65535.
                              </p>
                              <p>
                                We know that pure binary is of no use if we want
                                to represent negative numbers. In this case, we
                                could use sign and magnitude if we just want to
                                hold a positive or negative number but don't
                                need to do any calculations on the numbers. If
                                calculations on positive or negative numbers are
                                needed, then the two's complement system should
                                be selected. The key questions to ask, then,
                                when deciding on what binary system to use to
                                represent integers are:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      What range of numbers do I need to store?
                                    </li>
                                    <li>
                                      Do I need to hold negative as well as
                                      positive numbers?
                                    </li>
                                    <li>
                                      Do I need to do calculations on the
                                      numbers?
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong class="NormalContentHeading">
                                  Real numbers
                                </strong>
                                <br />
                                Real numbers are numbers that have a fractional
                                part. For example 6.7 and -23.65 are real
                                numbers because they both have a fractional
                                part. So far, we have only looked at using a
                                byte or two bytes to represent integers. To
                                represent real numbers in a computer, we use a
                                system called the ‘floating-point’ system. How
                                is this used to store a real number?
                              </p>
                              <p>
                                Consider this. The number 3547.54 is a real
                                number. It’s quite complex in that it has a
                                whole part and a fractional part. This number
                                can also be represented as 0.354754 x 104. The
                                0.354754 is known as the ‘mantissa’ and the 4 is
                                known as the ‘exponent’. If I now store both the
                                mantissa and the exponent, I can store all the
                                information I need to get back to the original
                                number. You may have come across this way of
                                representing numbers before in your maths
                                lessons. It’s known as ‘standard form’. If you
                                want to represent a real number then, you need
                                to store both the mantissa and the exponent. If
                                you only used one byte, the range and the
                                accuracy of the numbers you could store would be
                                very limited. Real numbers are therefore usually
                                represented using either 2 bytes or 4 bytes. We
                                will look in much more detail at floating-point
                                numbers and become expert in their use later in
                                the book!
                              </p>
                              <p>
                                <strong>
                                  <span class="NormalContentHeading">
                                    String
                                  </span>
                                </strong>
                                <br />
                                Data type string is used to hold a string of any
                                characters (letters, numbers, special characters
                                or control characters) from the keyboard. We
                                have already seen that PCs use ASCII. Every
                                character on the keyboard has a unique binary
                                code. To represent each character requires 1
                                byte. If you were setting up a database, for
                                example, and you needed to store the NAME of
                                someone, you would define NAME to be a data type
                                ‘text’ because each name is made up of a string
                                of characters from the keyboard. But how many
                                characters should you allow? You need to think
                                what the longest name possible is and then add a
                                bit, just in case! For example, you might decide
                                the longest name you can think of is 20
                                characters long. You need to allow 20 bytes of
                                storage space for every person's name, plus say
                                an extra 5 for 'insurance' - just in case there
                                is a slightly longer name than you thought of!
                                The amount of storage space will quickly
                                increase as the number of NAMEs you store
                                increases. There is a trick you can use,
                                however, to reduce the amount of space you need.
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Coding text values to save on storage space
                                </strong>
                                <br />
                                Suppose you had a university database that
                                stored each NAME OF STUDENT at university and
                                the TITLE OF DEGREE they were doing. There are
                                100 different degrees. If you had allowed 100
                                bytes for each TITLE OF DEGREE and you had 10
                                000 students, you would need 1 000 000 bytes to
                                store their degrees. However, if we coded up the
                                titles of degrees (Maths could be code MA,
                                History of Art could be HA and so on) then we
                                would only need to store two bytes per student
                                for the title of degree. This method of coding
                                is a very useful way of reducing the amount of
                                storage space needed so long as there are a
                                fixed number of choices. It enables you to store
                                lots of pieces of information as a short code.
                                It wouldn't be a suitable method for NAME OF
                                STUDENT, for example, because there are an
                                endless number of possible names!
                              </p>
                              <p>
                                There are some other benefits of coding data. It
                                helps reduce the amount of time needed to enter
                                in a particular piece of data into a database.
                                If the codes are selected in a certain way, only
                                authorised people will know what they mean.
                                Therefore the data is slightly more secure. In
                                addition, you can easily apply validation rules
                                to codes whereas applying them to long text
                                values is difficult.
                                <br />
                                <br />
                                <strong class="NormalContentHeading">
                                  Character
                                </strong>
                                <br />
                                Data type ‘character’ is used to store just one
                                character from the keyboard. It is usually a
                                letter that is stored. For example, you might
                                have in a university database the LOCATION of a
                                degree, what campus it is taught on. You might
                                have a choice of four locations, which have been
                                coded up into A, B, C or D. However, any
                                character, whether text, number, special or
                                control, can be stored in this data type. A
                                character needs one byte to store its code if
                                you are using the ASCII character set. Things
                                start to get a bit more complicated when you
                                start using other character sets. For example,
                                UNICODE can require up to 2 bytes if you are
                                using the UTF-16 version whereas UTF-32 uses 4
                                bytes per character.
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Boolean
                                </strong>
                                <br />
                                Any piece of information that can have two and
                                only two choices should be declared as data type
                                Boolean. For example, GENDER should be Boolean
                                because there are only two choices. ‘UK
                                STUDENT?’ should be data type Boolean because
                                every student is either a UK student, or not.
                                Each Boolean data item needs one bit to hold its
                                value. For example, 'bit three' could be set if
                                the gender of the student is male and reset if
                                they are female. One byte can be used to hold 8
                                Boolean data items because a byte is 8 bits 0000
                                0000 and each of those bits can be set to 1 (for
                                TRUE) or reset to zero (for FALSE).
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Date
                                </strong>
                                <br />
                                Date fields hold calendar dates! You need to
                                decide, however, what format you want the date
                                to be in because this affects how many bytes you
                                need to store the date. For example, if you want
                                the date to be DD/MM/YY (for example, 21/08/86)
                                then you need 6 bytes. (You don't need to store
                                the / symbol between the numbers). If, however,
                                you want the date in the form DD/MM/YYYY (for
                                example, 21/08/1986) then you need 8 bytes.
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Calculated fields
                                </strong>
                                <br />
                                It is worth mentioning that some pieces of data
                                aren't stored at all and so may not need to be
                                declared in the same way as pieces of data that
                                are stored. For example, calculated fields are
                                used in databases. These pieces of information
                                are not stored in a database or a program, but
                                are calculated at the time they are needed from
                                pieces of information that you have stored!
                              </p>
                              <p>
                                You can show how clever you are in any database
                                project by using a calculated field. A classic
                                example is where you store someone's
                                DATE_OF_BIRTH (data type DATE, 6 or 8 bytes) but
                                you don't store their age. (If you did store
                                their age rather than their date of birth, you
                                would have to change each record every single
                                year!!) If you needed to display someone's age,
                                perhaps in a report, then you would calculate it
                                in the background with programming code, using
                                their DATE_OF_BIRTH information and the
                                computer’s internal date. The code to do this
                                for any programming language you are familiar
                                with can be found by searching the Internet.
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Telephone numbers and other non-integer codes
                                </strong>
                                <br />
                                Just because a number is made up of numbers
                                doesn't mean it is a number!! A telephone
                                number, for example, isn't a number in the sense
                                that it's an amount of something. You can't add
                                a telephone number to another telephone number
                                to get a sum of telephone numbers! A telephone
                                number is better described as a code. A number
                                should only be declared a data type number if
                                you may need to do calculations with it. If you
                                don't ever need to do calculations with it then
                                it is safer to declare it as text (or as a BCD,
                                Binary Coded Decimal) number. This is because
                                leading zeros in integers are removed but are
                                not removed if the piece of data is a data type
                                text or BCD! Try, for example, typing in 00243
                                into a calculator. Either it won’t enter the
                                leading zeros or it removes them after you have
                                entered the number in. Telephone numbers
                                sometimes begin with a leading zero and so
                                should be declared as data type text or BCD. If
                                you had a phone number 764880, you could use 6
                                bytes if the data type was declared as a text.
                                One byte would be used to represent the 7. The
                                second byte would be used to represent the 6,
                                and so on. You could, however, use 3 bytes to
                                store the number as a BCD number in the
                                following way:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      You would store 0111 0110&nbsp; in the
                                      first byte. (The 7 would occupy the 4 bits
                                      on the left of the first byte and the 6
                                      would occupy the 4 bits on the right of
                                      the first byte.
                                    </li>
                                    <li>
                                      You would store 0100 1000&nbsp; in the
                                      second byte. (The 4 would occupy the 4
                                      bits on the left of this byte and the 8
                                      would occupy the 4 bits on the right of
                                      this byte).
                                    </li>
                                    <li>
                                      You would store 1000 0000&nbsp; in the
                                      second byte. (The 8 would occupy the 4
                                      bits on the left of this byte and the 0
                                      would occupy the 4 bits on the right of
                                      this byte).
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                There are other examples of ‘numbers’ that are
                                really codes - they are never 'added’, for
                                example, to other ‘numbers’. Consider a 6-digit
                                product code on an item of clothing in a shop
                                that is made up only of numbers. The numbers in
                                the code mean something - they are codes rather
                                than numbers. For example, the first number
                                might show a type of product, the next 2 numbers
                                might be a 'country of origin' code and the last
                                three numbers might be the manufacturer's ID.
                                You may need to strip out these numbers from a
                                code, and the first number might also be a zero.
                                You will never need to add one code to another,
                                however, because this type of calculation for
                                this piece of data is a nonsense.&nbsp;
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

export default Primitive_data_types_and_storage_requirements;
