<template>
  <div class="interComp">
    <form action="quizform" align="center">
      1. La deuda total del sector publico colombiano a fecha 31 de diciembre
      del 2.018 ascendió a: <br />
      <input type="radio" name="q1" value="a" />a) $300.00 billones <br />
      <input type="radio" name="q1" value="b" />b) $467.30 billones <br />
      <input type="radio" name="q1" value="c" />c) $576.90 billones <br />
      <input type="radio" name="q1" value="d" />d) $600.00 billones <br />
      <br />
      2. La deuda de los territorios nacionales a nivel general a fecha 31 de
      dic del 2.018 ascendió a: <br />
      <input type="radio" name="q2" value="a" />a) $48.97 billones <br />
      <input type="radio" name="q2" value="b" />b) $36.29 billones <br />
      <input type="radio" name="q2" value="c" />c) $28.61 billones<br />
      <input type="radio" name="q2" value="d" />d) $13.05 billones<br /><br />
      3. La deuda de los territorios nacionales a nivel general a fecha 31 de
      dic del 2.018 ascendió a:La deuda externa de Colombia al corte del 31 de
      diciembre del 2.018 ascendió a: <br />
      <input type="radio" name="q3" value="a" />a) $188.00 billones <br />
      <input type="radio" name="q3" value="b" />b) $233.16 billones <br />
      <input type="radio" name="q3" value="c" />c) 288.49 billnes<br />
      <input type="radio" name="q3" value="d" />d) 316.00 billones<br /><br />
      4. La deuda externa de Colombia al corte del 31 de diciembre del 2.018
      ascendió a: <br />
      <input type="radio" name="q4" value="a" />a) $303.18 billones <br />
      <input type="radio" name="q4" value="b" />b) $$320.01 billones <br />
      <input type="radio" name="q4" value="c" />c) 374.00 billones<br />
      <input type="radio" name="q4" value="d" />d) 343.74 billones<br />
      <br />

      <input type="button" value="submit" @click="check()" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Interface",
  methods: {
    check() {
      var q1 = document.quizform.q1.value;
      var q2 = document.quizform.q2.value;
      var q3 = document.quizform.q3.value;
      var q4 = document.quizform.q4.value;
      var count = 0;
      if (q1 == "b") {
        count++;
      }
      if (q2 == "a)") {
        count++;
      }
      if (q3 == "b") {
        count++;
      }
      if (q4 == "d") {
        count++;
      }
      alert("Obtuviste " + count + " respuestas correctas");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Hide placeholder on focus */
</style>
