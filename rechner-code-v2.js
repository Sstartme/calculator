$(document).ready(function() {
    function e() {
        var e = {};
        window.location.href.replace(/[?&]+([^=&]+)=?([^&]*)/gi, function(t, i, a) {
            e[i] = a
        });
        return e
    }

    function t() {
        W = !1, z = "", $.inArray("winkel_a", O) > -1 && (u = i(M)), $.inArray("winkel_b", O) > -1 && (v = i(C)), $.inArray("winkel_c", O) > -1 && (k = i(T)), _ = "", $.inArray("seite_a", O) > -1 && $.inArray("seite_b", O) > -1 ? (F = Math.sqrt(j * j + A * A), _ = "cÂ² = aÂ² + bÂ²<br />", _ += 'c = âˆš<span style="text-decoration:overline;">aÂ² + bÂ²</span><br />', _ += 'c = âˆš<span style="text-decoration:overline;">(' + r(j) + ")Â² + (" + r(A) + ")Â²</span><br />", _ += 'c = âˆš<span style="text-decoration:overline;">' + r(j * j) + " + " + r(A * A) + "</span><br />", _ += 'c = âˆš<span style="text-decoration:overline;">' + r(j * j + A * A) + "</span><br />", _ += "c = " + r(Math.sqrt(j * j + A * A))) : $.inArray("seite_b", O) > -1 && $.inArray("seite_c", O) > -1 ? (j = Math.sqrt(F * F - A * A), _ = "aÂ² = cÂ² - bÂ²<br />", _ += 'a = âˆš<span style="text-decoration:overline;">cÂ² - bÂ²</span><br />', _ += 'a = âˆš<span style="text-decoration:overline;">(' + r(F) + ")Â² - (" + r(A) + ")Â²</span><br />", _ += 'a = âˆš<span style="text-decoration:overline;">' + r(F * F) + " - " + r(A * A) + "</span><br />", _ += 'a = âˆš<span style="text-decoration:overline;">' + r(F * F - A * A) + "</span><br />", _ += "a = " + r(Math.sqrt(F * F - A * A))) : $.inArray("seite_a", O) > -1 && $.inArray("seite_c", O) > -1 && (A = Math.sqrt(F * F - j * j), _ = "bÂ² = cÂ² - aÂ²<br />", _ += 'b = âˆš<span style="text-decoration:overline;">cÂ² - aÂ²</span><br />', _ += 'b = âˆš<span style="text-decoration:overline;">(' + r(F) + ")Â² - (" + r(j) + ")Â²</span><br />", _ += 'b = âˆš<span style="text-decoration:overline;">' + r(F * F) + " - " + r(j * j) + "</span><br />", _ += 'b = âˆš<span style="text-decoration:overline;">' + r(F * F - j * j) + "</span><br />", _ += "b = " + r(Math.sqrt(F * F - j * j))), u = Math.asin(j / F), v = Math.asin(A / F), k = Math.PI / 2, M = a(u), C = a(v), T = a(k), M = n(M, 5), C = n(C, 5), T = n(T, 5), j = n(j, 5), A = n(A, 5), F = n(F, 5), null == typeof M || null == typeof C || null == typeof T || null == typeof j || null == typeof A || null == typeof F || isNaN(M) || isNaN(C) || isNaN(T) || isNaN(j) || isNaN(A) || isNaN(F) ? W = !1 : (M < 0 && (M += 360, u = i(M)), C < 0 && (C += 360, v = i(C)), T < 0 && (T += 360, k = i(T)), M > 180 && (M %= 180, u = i(M)), C < 0 && (C %= 180, v = i(C)), T < 0 && (T %= 180, k = i(T)), W = !0)
    }

    function i(e) {
        return e * (Math.PI / 180)
    }

    function a(e) {
        return e * (180 / Math.PI)
    }

    function r(e) {
        return e = Math.round(e * m) / m, String(e).replace(/\./g, ",")
    }

    function n(e, t) {
        return !1 !== String(e).indexOf(",") && (e = parseFloat(String(e).replace(/\,/g, "."))), precD = Math.pow(10, t), e = Math.round(e * precD) / precD, e
    }

    function l(e) {
        H = e, O[0] != e && (O[1] = O[0], O[0] = e, $(".formelblock input").removeClass("yellowbg"), $(".formelblock input#" + O[0]).addClass("yellowbg"), $(".formelblock input#" + O[1]).addClass("yellowbg"))
    }

    function s() {
        winkel_a_string = r(M), winkel_b_string = r(C), winkel_c_string = r(T), seite_a_string = r(j), seite_b_string = r(A), seite_c_string = r(F), (!isFinite(M) || M > 1e15 || M < -1e15) && (winkel_a_string = "nicht definiert"), (!isFinite(C) || C > 1e15 || C < -1e15) && (winkel_b_string = "nicht definiert"), (!isFinite(T) || T > 1e15 || T <
            -1e15) && (winkel_c_string = "nicht definiert"), "winkel_a" != H && $(".formelblock input#winkel_a").val(winkel_a_string), "winkel_b" != H && $(".formelblock input#winkel_b").val(winkel_b_string), "winkel_c" != H && $(".formelblock input#winkel_c").val(winkel_c_string), "seite_a" != H && $(".formelblock input#seite_a").val(seite_a_string), "seite_b" != H && $(".formelblock input#seite_b").val(seite_b_string), "seite_c" != H && $(".formelblock input#seite_c").val(seite_c_string);
        r(Math.sin(u)), r(Math.sin(v)), r(Math.sin(k));
        var e = r(Math.sin(v) * F),
            t = r(Math.sin(k) * j),
            i = r(Math.sin(u) * A),
            a = r(F * Math.sin(u) * A / 2),
            n = _ + "<br /><br /><b>Winkel:</b><br />Î± = " + winkel_a_string + "Â°<br />Î² = " + winkel_b_string + "Â°<br />Î³ = " + winkel_c_string + "Â°<br /><br /><b>Weiteres:</b><br />HÃ¶he h<sub>a</sub> = sin(Î²)Â·c = " + e + "<br />HÃ¶he h<sub>b</sub> = sin(Î³)Â·a = " + t + "<br />HÃ¶he h<sub>c</sub> = sin(Î±)Â·b = " + i + "<br />FlÃ¤cheninhalt = c Â· h<sub>c</sub> = " + a;
        $("#calcresults_txt").html(n)
    }

    function c() {
        var e = !1;
        if ($(".formelblock input").each(function() {
                if ($(this).attr("id") == H) {
                    var t = $(this).val().indexOf(",") + 1,
                        i = $(this).val().length;
                    t == i && (e = !0), "-" == $(this).val() && (e = !0)
                }
            }), e) return !0
    }

    function o(e) {
        return parseFloat(String(e).replace(/\,/g, "."))
    }

    function h(e, t) {
        var i = .1;
        "winkel_a" == H && (i = 1);
        var a = t ? i : -i,
            r = $(".formelblock").find("input#" + e).val();
        val_in = parseFloat(r.replace(/\,/g, ".")), val_in = Math.round((val_in + a) * m) / m;
        var n = String(val_in).replace(/\./g, ",");
        $(".formelblock").find("input#" + e).val(n), $(".formelblock").trigger("keyup")
    }

    function p() {
        N = j * I, D = A * I, P = F * I, le.graphics.clear(), le.graphics.setStrokeStyle(K, "round").beginStroke("#3C0"), le.graphics.moveTo(q, E), le.graphics.lineTo(q + P, E), ne.graphics.clear(), f = Math.cos(u) * D, w = Math.sin(u) * D, ne.graphics.setStrokeStyle(K, "round").beginStroke("#47D"), ne.graphics.moveTo(q, E), ne.graphics.lineTo(q + f, E - w), re.graphics.clear(), y = Math.cos(v) * N, x = Math.sin(v) * N, re.graphics.setStrokeStyle(K, "round").beginStroke("#E33"), re.graphics.moveTo(q + P, E), re.graphics.lineTo(q + P - y, E - x), te.graphics.clear(), te.graphics.beginFill("rgba(255,61,61,0.75)"), te.graphics.setStrokeStyle(3, "round").beginStroke("#F30"), te.graphics.arc(q, E, 50, 0, -u, !0), te.graphics.lineTo(q, E).closePath(), te.graphics.endFill(), ie.graphics.clear(), ie.graphics.beginFill("rgba(50,80,255,0.75)"), ie.graphics.setStrokeStyle(3, "round").beginStroke("#47D"), ie.graphics.arc(q + P, E, 50, -Math.PI + v, -Math.PI, !0), ie.graphics.lineTo(q + P, E).closePath(), ie.graphics.endFill(), ae.graphics.clear(), ae.graphics.beginFill("rgba(50,200,0,0.75)"), ae.graphics.setStrokeStyle(3, "round").beginStroke("#3C0"), ae.graphics.arc(q + f, E - w, 50, -Math.PI - u, -Math.PI - u - k, !0), ae.graphics.lineTo(q + f, E - w).closePath(), ae.graphics.endFill(), triline_color = "#00F", d(), Q.update()
    }

    function d() {
        se.text = "Î± = " + r(M) + "Â°", se.x = q + ue, se.y = E - ue, se.textAlign = "center", ce.text = "Î² = " + r(C) + "Â°", ce.x = q + P, ce.y = E - ue, ce.textAlign = "center", oe.text = "Î³ = " + r(T) + "Â°", oe.x = q + f, oe.y = E - w - ue, oe.textAlign = "center", he.text = "a = " + r(j), he.x = q + P - y / 2 + ue, he.y = E - w / 2 - ue, he.textAlign = "center", pe.text = "b = " + r(A), pe.x = q + f / 2 - ue, pe.y = E - w / 2 - ue, pe.textAlign = "center", ge.text = "c = " + r(F), ge.x = q + P / 2, ge.y = E + 5, ge.textAlign = "center"
    }

    function g() {
        V.graphics.clear(), X.graphics.clear(), R.graphics.clear(), U.graphics.clear(), Y.graphics.clear(), Z.graphics.clear();
        var e = 25,
            t = $("#canvas2d").height() - 25,
            i = $("#canvas2d").width() - .05 * $("#canvas2d").width(),
            a = $("#canvas2d").height() - .05 * $("#canvas2d").height(),
            r = ($("#canvas2d").width() - i) / 2,
            n = ($("#canvas2d").height() - a) / 2,
            l = 2;
        V.graphics.setStrokeStyle(l, "round").beginStroke("#000"), V.graphics.moveTo(r, t).lineTo(r + i, t), X.graphics.setStrokeStyle(l, "round").beginStroke("#000"), X.graphics.moveTo(e, n).lineTo(e, n + a);
        var s = 5,
            c = 5;
        Y.graphics.beginFill("#000"), Y.graphics.setStrokeStyle(l, "round").beginStroke("#000"), Y.graphics.moveTo(e, n - s / 2).lineTo(e + s, n + s + c).lineTo(e - s, n + s + c).lineTo(e, n - s / 2), Y.graphics.endFill(), Z.graphics.beginFill("#000"), Z.graphics.beginStroke("#000"), Z.graphics.moveTo(r + i + s / 2, t).lineTo(r + i - s - c, t + s).lineTo(r + i - s - c, t - s).lineTo(r + i + s / 2, t), Z.graphics.endFill();
        var o = new createjs.Text("x", "bold 16px Arial", "#333"),
            h = new createjs.Text("y", "bold 16px Arial", "#333");
        Q.addChild(o), Q.addChild(h), o.x = r + i - 5, o.y = t + 10, h.x = e - 20, h.y = n - 5;
        for (var p = i / .95 / (100 - I) * 5, d = 30, g = 0; g <= d; g++) U.graphics.setStrokeStyle(1, "round").beginStroke("#DDE"), U.graphics.moveTo(r, t + (g - d / 2) * p).lineTo(r + i, t + (g - d / 2) * p);
        var b = 40;
        for (g = 0; g <= b; g++) R.graphics.setStrokeStyle(1, "round").beginStroke("#DDE"), R.graphics.moveTo(e + (g - b / 2) * p, n).lineTo(e + (g - b / 2) * p, n + a);
        Q.update()
    }
    var b, u, v, k, _, f, w, y, x, S = 4,
        m = Math.pow(10, S),
        M = 45,
        C = 60,
        T = 75,
        j = 5,
        A = 4,
        F = 7,
        I = 50,
        N = j * I,
        D = A * I,
        P = F * I,
        q = 25,
        E = $("#canvas2d").height() - 25,
        H = "seite_a",
        O = ["seite_a", "seite_b"],
        W = !1,
        z = "",
        L = (window.location.href, e()),
        B = [];
    if (Object.keys(L).length > 0) {
        var G = 0;
        if ($.each(L, function(e, t) {
                if (G >= 3) return !1;
                e = e.toLowerCase(), "a" == e ? (j = o(t), B.push("seite_a")) : "b" == e ? (A = o(t), B.push("seite_b")) : "c" == e ? (F = o(t), B.push("seite_c")) : "wa" == e ? (M = o(t), B.push("winkel_a")) : "wb" == e ? (C = o(t), B.push("winkel_b")) : "wc" == e ? (T = o(t), B.push("winkel_c")) : G--, G++
            }), G >= 2) {
            H = "", s();
            for (var J = 0; J < B.length; J++) O[J] = B[J];
            l(O[1])
        }
    }
    $(".formelblock input").focus(function(e) {
        l($(this).attr("id")), $(".formelblock").trigger("keyup")
    }), $(".formelblock input").keyup(function(e) {
        l($(this).attr("id")), $(".formelblock").trigger("keyup")
    }), $(".formelblock").keyup(function(e) {
        if (!c() && 37 != e.keyCode && 39 != e.keyCode) {
            console.log("calculation by " + H), M = o($(this).find(" input#winkel_a").val()), C = o($(this).find("input#winkel_b").val()), T = o($(this).find("input#winkel_c").val()), j = o($(this).find("input#seite_a").val()), A = o($(this).find("input#seite_b").val()), F = o($(this).find("input#seite_c").val()), 38 == e.keyCode ? h(H, !0) : 40 == e.keyCode && h(H, !1), t(), W || (z = "Dreieck nicht mÃ¶glich."), s(), "" != z ? ($("#errormsg").show(), $("#errormsg").html(z)) : ($("#errormsg").hide(), $("#errormsg").html(""));
            var i = "";
            $.each(O, function(e, t) {
                "seite_a" == t ? i += "a=" + j : "seite_b" == t ? i += "b=" + A : "seite_c" == t && (i += "c=" + F), "winkel_a" == t ? i += "wa=" + M : "winkel_b" == t ? i += "wb=" + C : "winkel_c" == t && (i += "wc=" + T), i += "&"
            }), i = i.substring(0, i.length - 1);
            var a = location.protocol + "//" + location.host + location.pathname;
            a = a.replace(/\/$/, ""), b = a + "?" + i, $("#memvaluelink").attr("href", b), p()
        }
    }), $("#memvaluelink").click(function(e) {
        return e.preventDefault(), $("#lightbox-popup").fadeIn("slow"), $("#lightbox-center").html('<input type="text" class="linkshare" value="' + b + '">'), $("#lightbox-center .linkshare").select(), $("#lightbox-center").css("margin-top", ($(window).height() - $("#lightbox-center").height()) / 2 + "px"), !1
    });
    var K = 5,
        Q = new createjs.Stage("canvas2d"),
        R = new createjs.Shape;
    Q.addChild(R);
    var U = new createjs.Shape;
    Q.addChild(U);
    var V = new createjs.Shape;
    Q.addChild(V);
    var X = new createjs.Shape;
    Q.addChild(X);
    var Y = new createjs.Shape;
    Q.addChild(Y);
    var Z = new createjs.Shape;
    Q.addChild(Z);
    var ee = new createjs.Shape;
    Q.addChild(ee);
    var te = new createjs.Shape;
    Q.addChild(te);
    var ie = new createjs.Shape;
    Q.addChild(ie);
    var ae = new createjs.Shape;
    Q.addChild(ae);
    var re = new createjs.Shape;
    Q.addChild(re);
    var ne = new createjs.Shape;
    Q.addChild(ne);
    var le = new createjs.Shape;
    Q.addChild(le);
    var se = new createjs.Text("Î±", "14px Arial", "#C00");
    Q.addChild(se);
    var ce = new createjs.Text("Î±", "14px Arial", "#00F");
    Q.addChild(ce);
    var oe = new createjs.Text("Î±", "14px Arial", "#3C0");
    Q.addChild(oe);
    var he = new createjs.Text("a", "14px Arial", "#F00");
    Q.addChild(he);
    var pe = new createjs.Text("b", "14px Arial", "#00F");
    Q.addChild(pe);
    var de, ge = new createjs.Text("c", "14px Arial", "#3C0");
    Q.addChild(ge);
    var be = .01;
    $("#valup, #valdown").mousedown(function(e) {
        be = "valdown" == $(this).attr("id") ? -1 : 1, clearInterval(de), de = setInterval(function() {
            I += be, I < 1 && (I = 1), $("#zoom_val").text(I + 50), g(), $(".formelblock").trigger("keyup")
        }, 50)
    }), $("#valup, #valdown").mouseup(function(e) {
        clearInterval(de)
    }), $("#valup, #valdown").mouseout(function(e) {
        clearInterval(de)
    });
    var ue = 20;
    g(), $(".formelblock").trigger("keyup"), Q.update()
}), Math.csc = function(e) {
    return 1 / Math.sin(e)
}, Math.sec = function(e) {
    return 1 / Math.cos(e)
}, Math.cot = function(e) {
    return 1 / Math.tan(e)
};
