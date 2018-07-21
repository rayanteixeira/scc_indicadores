package br.com.sococo.resumo.model.dashboard;

public class DadosMes {

    private String mes;
    private String total;

    public DadosMes() {
    }

    public DadosMes(String mes, String total) {
        this.mes = mes;
        this.total = total;
    }

    public String getMes() {
        if (this.mes.equals("1")) this.mes = "Jan";
        if (this.mes.equals("2")) this.mes = "Fev";
        if (this.mes.equals("3")) this.mes = "Mar";
        if (this.mes.equals("4")) this.mes = "Abr";
        if (this.mes.equals("5")) this.mes = "Mai";
        if (this.mes.equals("6")) this.mes = "Jun";
        if (this.mes.equals("7")) this.mes = "Jul";
        if (this.mes.equals("8")) this.mes = "Ago";
        if (this.mes.equals("9")) this.mes = "Set";
        if (this.mes.equals("10")) this.mes = "Out";
        if (this.mes.equals("11")) this.mes = "Nov";
        if (this.mes.equals("12")) this.mes = "Dez";

        return mes;
    }

    public void setMes(String mes) {
        this.mes = mes;
    }

    public String getTotal() {
        return total;
    }

    public void setTotal(String total) {
        this.total = total;
    }
}
