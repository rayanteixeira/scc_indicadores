package br.com.sococo.resumo.model.dashboard;

public class DadosDia {

    private String dia;
    private String total;

    public DadosDia() {
    }

    public DadosDia(String dia, String total) {
        this.dia = dia;
        this.total = total;
    }

    public String getDia() {
        if (this.dia.equals("1")) this.dia = "01";
        if (this.dia.equals("2")) this.dia = "02";
        if (this.dia.equals("3")) this.dia = "03";
        if (this.dia.equals("4")) this.dia = "04";
        if (this.dia.equals("5")) this.dia = "05";
        if (this.dia.equals("6")) this.dia = "06";
        if (this.dia.equals("7")) this.dia = "07";
        if (this.dia.equals("8")) this.dia = "08";
        if (this.dia.equals("9")) this.dia = "09";

        return dia;
    }

    public void setDia(String dia) {
        this.dia = dia;
    }

    public String getTotal() {
        return total;
    }

    public void setTotal(String total) {
        this.total = total;
    }
}
