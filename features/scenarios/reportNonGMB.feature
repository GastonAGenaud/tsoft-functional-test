Feature: Como usuario sin registrar en GMB - US

    Scenario: Como usuario quiero solicitar un reporte
        Given Ingreso a la pantalla de mi negocio
        When Ingreso los datos del local "NaN Software Development"
        Then retorna la pagina de solicitud de reporte
