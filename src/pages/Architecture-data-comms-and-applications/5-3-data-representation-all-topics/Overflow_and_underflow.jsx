import React from "react";

function Overflow_and_underflow() {
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
                                Overflow and underflow
                              </h1>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Introduction
                                  </span>
                                </strong>
                                <br />
                                Overflow and underflow are general terms. They
                                describe the situation when something becomes
                                too big or too small to be processed correctly
                                or stored in the space allocated to it
                                correctly.
                              </p>

                              <p>
                                <strong>Overflow and underflow examples</strong>
                                <br />
                                If you have a fixed-size data structure such as
                                a stack that has been set up to hold twenty data
                                items, and you try to add a twenty first data
                                item, this will cause a 'stack overflow' error.
                                This is because the data structure is not big
                                enough to hold the extra piece of data you are
                                trying to add to it.&nbsp;
                              </p>
                              <p>
                                Imagine you are trying to add two 8-bit numbers
                                in an 8-bit computer. The largest number that a
                                register or memory location can hold is 8 bits.
                                What happens when you add these two numbers?
                              </p>
                              <p>
                                &nbsp; &nbsp; 1 1 1 1 0 0 0 0&nbsp;
                                <br />
                                &nbsp;+ 1 0 0 1 0 0 0 0&nbsp;
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  The answer is:
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  1 1 0 0 0 0 0 0 0
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  But this has 9 bits! As our memory locations
                                  can only hold 8 bits, that extra bit on the
                                  far left causes an 'overflow' error. This
                                  signals that the result was too big to hold in
                                  8 bits. The sum we just did was 240 + 144,
                                  which equals 384. The largest number that 8
                                  bits can hold is 1111 1111 or 255 so having an
                                  overflow error makes sense with this
                                  calculation.&nbsp;
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  Imagine you want to store a floating point
                                  number in a programming language. A floating
                                  point number has a mantissa and an exponent.
                                  If you wanted to store 5.5 in a byte (8 bits)
                                  as a normalised floating point number using 5
                                  places for the mantissa and 3 places for the
                                  exponent, we would convert 5.5 into a fixed
                                  point number first to get 101.1 but this has
                                  to begin with 0.1 to be normalised, so we move
                                  the decimal point to the left three (011)
                                  places, to get 0.1011. To get the floating
                                  point number, we therefore have 01011011.
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  The largest number we can store is when both
                                  the mantissa and the exponent are positive.
                                  The mantissa must begin with 01 so is 01111
                                  and the exponent is a 2s complement number so
                                  the largest number is 011. The maximum value
                                  is therefore 01111011 or &nbsp;7.5 in decimal.
                                  If we try to hold a value bigger than that, we
                                  will get an overflow error.
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  The smallest positive number we can hold is
                                  when the mantissa is the smallest positive
                                  number and the exponent is the largest
                                  negative number. The smallest positive
                                  (normalised) mantissa is 01000 and the largest
                                  negative exponent is 100 (-4 as a 2s
                                  complement number). The smallest positive
                                  number we can hold is therefore 0.03125. If we
                                  tried to hold 0.02234 for example, we would
                                  get an underflow error.
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  The smallest negative number we can hold is -8
                                  so we would get an underflow error if we tried
                                  to store -15, for example.
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  <strong>Status register</strong>
                                  <br />
                                  The status register is a register in a CPU. In
                                  a 16-bit computer, there are clearly 16 bits
                                  in the status register. Each of these bits
                                  gets set (made a one) or reset (made a zero)
                                  after every single operation that the CPU
                                  does. One of those bits is used to indicate if
                                  an overflow happened in the last calculation
                                  that the CPU did. Another one is used to
                                  indicate if an underflow occured in the last
                                  calculation that the CPU did. We can test
                                  these bits by masking them out.
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  For example, imagine the status register after
                                  a calculation looked like this 0101 0011 0110
                                  0000 and the overflow bit was bit 3 (the
                                  fourth from the right - remember, we count
                                  from zero). To see if an overflow error
                                  occured, we just have to AND it with 0000 0000
                                  0000 1000. If the bit was set because there
                                  was an overflow, then this would result in
                                  0000 0000 0000 1000 and if there was no
                                  overflow, we would get 0000 0000 0000 0000. We
                                  can then test this result to see if it is zero
                                  or not zero to decide what code to do next.
                                </span>
                                &nbsp;
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

export default Overflow_and_underflow;